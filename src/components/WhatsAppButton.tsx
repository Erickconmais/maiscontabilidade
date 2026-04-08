import { MessageCircle } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const WhatsAppButton = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <button
      onClick={() => openLeadForm("geral")}
      className="whatsapp-float group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-25"></div>
        <div className="relative h-14 w-14 bg-whatsapp hover:bg-whatsapp-hover rounded-full flex items-center justify-center shadow-strong transition-all group-hover:scale-110">
          <MessageCircle className="h-7 w-7 text-primary-foreground" />
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
