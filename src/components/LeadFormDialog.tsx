import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Loader2, CheckCircle } from "lucide-react";

const revenueOptions = [
  "De R$0 a R$7 mil/mês",
  "De R$7 mil a R$15 mil/mês",
  "De R$15 mil a R$20 mil/mês",
  "De R$20 mil a R$40 mil/mês",
  "Acima de R$40 mil/mês",
];

const LeadFormDialog = () => {
  const { isOpen, setIsOpen, selectedPlan } = useLeadForm();
  const [step, setStep] = useState(0);
  const [redirecting, setRedirecting] = useState(false);

  const [hasCompany, setHasCompany] = useState<string>("");
  const [revenue, setRevenue] = useState("");
  const [activity, setActivity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setStep(0);
    setHasCompany("");
    setRevenue("");
    setActivity("");
    setName("");
    setPhone("");
    setRedirecting(false);
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      resetForm();
    }
    setIsOpen(open);
  };

  const canAdvance = () => {
    switch (step) {
      case 0: return hasCompany !== "";
      case 1: return revenue !== "";
      case 2: return activity.trim() !== "";
      case 3: return name.trim() !== "";
      case 4: return phone.trim() !== "";
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setRedirecting(true);

      // Send data to webhook
      fetch("https://hook.us2.make.com/3e56nx8xf4e8mluy6fz3p5lilmdq2fac", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          possui_empresa: hasCompany,
          faturamento_atual: revenue,
          ramo_atividade: activity,
          nome: name,
          telefone: phone,
          plano_interesse: selectedPlan,
        }),
      }).catch(() => {});

      setTimeout(() => {
        window.open(getWhatsAppLink(selectedPlan), "_blank");
        handleClose(false);
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  if (redirecting) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-10 gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground text-center">
              Obrigado, {name}!
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Redirecionando para o WhatsApp...
            </p>
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Quase lá! Preencha seus dados
          </DialogTitle>
          <DialogDescription>
            Responda rapidamente para direcionarmos você ao contador ideal.
          </DialogDescription>
        </DialogHeader>

        {/* Progress bar */}
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="py-4 min-h-[160px]">
          {step === 0 && (
            <div className="space-y-3">
              <Label className="text-base font-semibold">Você possui alguma empresa?</Label>
              <div className="grid grid-cols-2 gap-3">
                {["Sim", "Não"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setHasCompany(opt)}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                      hasCompany === opt
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50 text-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-3">
              <Label className="text-base font-semibold">Qual o seu faturamento atual?</Label>
              <div className="space-y-2">
                {revenueOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setRevenue(opt)}
                    className={`w-full py-2.5 px-4 rounded-lg border-2 text-sm font-medium text-left transition-all ${
                      revenue === opt
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50 text-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <Label htmlFor="activity" className="text-base font-semibold">
                Qual o seu ramo de atividade?
              </Label>
              <Input
                id="activity"
                placeholder="Ex: Comércio, Tecnologia, Serviços..."
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                autoFocus
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <Label htmlFor="name" className="text-base font-semibold">
                Qual o seu nome?
              </Label>
              <Input
                id="name"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-base font-semibold">
                Qual o seu telefone?
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
              />
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {step > 0 && (
            <Button variant="outline" onClick={handleBack} className="flex-1">
              Voltar
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!canAdvance()}
            className="flex-1"
          >
            {step < 4 ? "Continuar" : "Ir para o WhatsApp"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialog;
