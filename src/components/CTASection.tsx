import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const CTASection = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl cta-gradient p-6 sm:p-8 md:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
              Chega de complicação com contabilidade
            </h2>
            <p className="text-base sm:text-xl text-primary-foreground/90 mb-6 sm:mb-10">
              Fale agora com um contador pelo WhatsApp e comece a simplificar a vida da sua empresa.
            </p>
            
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-strong group w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6"
              onClick={() => openLeadForm("geral")}
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Falar com um contador agora</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
