import { RefreshCw, HeadphonesIcon, HelpCircle, MapPin } from "lucide-react";

const ObjectionsSection = () => {
  const objections = [
    {
      icon: RefreshCw,
      question: "Posso trocar de contador sem problemas?",
      answer:
        "Sim! Nós cuidamos de toda a migração. Você não precisa se preocupar com nada, fazemos a transição de forma tranquila e segura.",
    },
    {
      icon: HeadphonesIcon,
      question: "Vou ter suporte humano ou só robô?",
      answer:
        "Atendimento 100% humano! Nossa equipe de contadores está sempre pronta para te ajudar pelo WhatsApp.",
    },
    {
      icon: HelpCircle,
      question: "E se eu tiver dúvidas?",
      answer:
        "Estamos aqui para isso! Tire suas dúvidas a qualquer momento pelo WhatsApp. Respondemos rapidamente.",
    },
    {
      icon: MapPin,
      question: "Funciona para minha cidade?",
      answer:
        "Sim! Por ser 100% online, atendemos empresas de todo o Brasil, independente de onde você esteja.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pode ficar <span className="text-primary">tranquilo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entendemos suas preocupações. Veja como resolvemos cada uma delas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {objections.map((objection, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <objection.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {objection.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {objection.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
