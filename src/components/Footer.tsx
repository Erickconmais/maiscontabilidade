import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">+</span>
              </div>
              <span className="font-bold text-xl">
                Mais Contabilidade
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Contabilidade online simples, econômica e sem burocracia para sua empresa.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-primary-foreground/70 mb-2">
              Fale conosco pelo WhatsApp
            </p>
            <a
              href={getWhatsAppLink("geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              <MessageCircle className="h-4 w-4" />
              +55 62 9162-3979
            </a>
          </div>

          <div className="text-right">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Mais Contabilidade Online
            </p>
            <p className="text-xs text-primary-foreground/50 mt-1">
              Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
