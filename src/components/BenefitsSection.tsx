import { Button } from "@/components/ui/button";
import { Laptop, MessageCircle, BadgeCheck, RefreshCw, Building2 } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const BenefitsSection = () => {
  const { openLeadForm } = useLeadForm();
  const benefits = [{
    icon: Laptop,
    title: "Contabilidade 100% online",
    description: "Tudo digital, sem papel, sem deslocamento. Acesse de qualquer lugar."
  }, {
    icon: MessageCircle,
    title: "Atendimento humano e rápido",
    description: "Fale com contadores de verdade pelo WhatsApp. Resposta em minutos."
  }, {
    icon: BadgeCheck,
    title: "Sem taxas escondidas",
    description: "Preço claro e fixo. Você sabe exatamente quanto vai pagar."
  }, {
    icon: RefreshCw,
    title: "Troca de contador sem dor de cabeça",
    description: "Cuidamos de toda a migração. Você não precisa se preocupar."
  }, {
    icon: Building2,
    title: "Abertura e migração de empresa",
    description: "Suporte completo para abrir seu CNPJ ou trocar de contabilidade."
  }];
  return <section id="beneficios" className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Vantagens
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher a{" "}
            <span className="text-highlight">Mais Contabilidade Online?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Simplificamos a contabilidade para você focar no que realmente importa: fazer seu negócio crescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => <div key={index} className="feature-card group">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>)}
        </div>

        <div className="mt-16 text-center">
          <Button variant="hero" size="xl" onClick={() => openLeadForm("geral")}>
            <MessageCircle className="h-5 w-5" />
            Falar com um contador agora
          </Button>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;
