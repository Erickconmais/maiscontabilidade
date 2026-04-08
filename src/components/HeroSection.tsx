import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Shield, Clock, Users } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const HeroSection = () => {
  const { openLeadForm } = useLeadForm();
  const benefits = [{
    icon: Check,
    text: "Sem papelada"
  }, {
    icon: MessageCircle,
    text: "Atendimento via WhatsApp"
  }, {
    icon: Shield,
    text: "Planos acessíveis"
  }, {
    icon: Users,
    text: "Especialistas em MEI e Simples Nacional"
  }];
  return <section className="hero-gradient-bg py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <Shield className="h-4 w-4" />
              Contabilidade 100% digital
            </div>
            
            <h1 className="text-hero-mobile md:text-hero text-foreground text-balance">
              Contabilidade online{" "}
              <span className="text-highlight">simples, econômica</span> e sem burocracia
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Cuide da contabilidade da sua empresa de forma prática, com atendimento humano e preços que cabem no seu bolso.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>)}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6" onClick={() => openLeadForm("geral")}>
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="truncate">Falar com um contador agora</span>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6" asChild>
                <a href="#planos">
                  Ver planos e preços
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Resposta em minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Sem taxas escondidas</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative bg-card rounded-3xl shadow-strong p-8 border animate-float">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl cta-gradient flex items-center justify-center">
                    <MessageCircle className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Atendimento rápido</p>
                    <p className="text-sm text-muted-foreground">Via WhatsApp</p>
                  </div>
                </div>
                
                <div className="h-px bg-border"></div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Plano a partir de</span>
                    <span className="text-2xl font-bold text-primary">R$149</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Abertura de empresa grátis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Troca de contador sem dor de cabeça</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
