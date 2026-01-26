import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
const Header = () => {
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg cta-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">+</span>
            </div>
            <span className="font-bold text-xl text-foreground">
              Mais <span className="text-highlight">Contabilidade</span>
            </span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="#planos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Planos
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Dúvidas
          </a>
        </nav>

        <Button variant="whatsapp" size="default" asChild>
          <a href={getWhatsAppLink("geral")} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
        </Button>
      </div>
    </header>;
};
export default Header;