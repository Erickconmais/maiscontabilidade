import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Check, Star, MessageCircle } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      id: "essencial" as const,
      name: "Essencial",
      price: "149",
      description: "Ideal para quem está começando",
      recommended: false,
      features: [
        "Contabilidade para MEI ou empresas iniciais",
        "Obrigações fiscais básicas",
        "Suporte via WhatsApp",
        "Emissão de notas fiscais",
        "Declarações anuais",
      ],
    },
    {
      id: "plus" as const,
      name: "Plus",
      price: "199",
      description: "Para empresas em crescimento",
      recommended: true,
      features: [
        "Tudo do plano Essencial",
        "Suporte prioritário",
        "Acompanhamento mais próximo",
        "Relatórios mensais",
        "Consultoria tributária básica",
        "Atendimento em até 2h",
      ],
    },
    {
      id: "premium" as const,
      name: "Premium",
      price: "298",
      description: "Tranquilidade total para seu negócio",
      recommended: false,
      features: [
        "Tudo do plano Plus",
        "Atendimento personalizado",
        "Suporte estratégico",
        "Planejamento tributário",
        "Reuniões mensais",
        "Contador dedicado",
        "Prioridade máxima",
      ],
    },
  ];

  return (
    <section id="planos" className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Planos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o plano ideal{" "}
            <span className="text-primary">para o seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Preços transparentes, sem surpresas. Cancele quando quiser.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card relative ${
                plan.recommended ? "plan-recommended" : ""
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full cta-gradient text-primary-foreground text-sm font-semibold shadow-md">
                    <Star className="h-4 w-4 fill-current" />
                    Mais escolhido
                  </span>
                </div>
              )}

              <div className="text-center pb-6 border-b border-border">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground text-lg">R$</span>
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <div className="py-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.recommended ? "plan-recommended" : "plan"}
                size="lg"
                className="w-full text-sm px-3"
                asChild
              >
                <a
                  href={getWhatsAppLink(plan.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">Quero o Plano {plan.name}</span>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
