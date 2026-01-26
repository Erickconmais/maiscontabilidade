import { ClipboardList, MessageCircle, Upload, Rocket } from "lucide-react";
const HowItWorksSection = () => {
  const steps = [{
    icon: ClipboardList,
    number: "01",
    title: "Escolha seu plano",
    description: "Selecione o plano ideal para o seu negócio. Temos opções para todos os tamanhos."
  }, {
    icon: MessageCircle,
    number: "02",
    title: "Fale com um especialista",
    description: "Entre em contato pelo WhatsApp e tire todas as suas dúvidas com nossa equipe."
  }, {
    icon: Upload,
    number: "03",
    title: "Envie seus dados",
    description: "Tudo de forma digital e segura. Sem papel, sem complicação."
  }, {
    icon: Rocket,
    number: "04",
    title: "Comece sem complicação",
    description: "Sua contabilidade começa a funcionar. Relaxe e foque no seu negócio!"
  }];
  return <section id="como-funciona" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Processo Simples
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como <span className="text-highlight">funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Em 4 passos simples você já tem sua contabilidade funcionando
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <div key={index} className="relative">
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary"></div>
                </div>}
              
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="h-9 w-9 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full cta-gradient flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;