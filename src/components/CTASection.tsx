import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl cta-gradient p-8 md:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Chega de complicação com contabilidade
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Fale agora com um contador pelo WhatsApp e comece a simplificar a vida da sua empresa.
            </p>
            
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 shadow-strong group"
              asChild
            >
              <a
                href={getWhatsAppLink("geral")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com um contador agora
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
