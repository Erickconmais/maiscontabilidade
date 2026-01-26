import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQSection = () => {
  const faqs = [{
    question: "A Mais Contabilidade Online atende minha cidade?",
    answer: "Sim! Por ser 100% digital, atendemos empresas de todo o Brasil. Não importa onde você esteja, nossa equipe está pronta para te ajudar."
  }, {
    question: "Posso trocar de contador?",
    answer: "Com certeza! Nós cuidamos de toda a migração de forma tranquila e sem burocracia. Você não precisa se preocupar com nada."
  }, {
    question: "Quanto tempo demora para começar?",
    answer: "O processo é bem rápido! Após enviar seus documentos, sua contabilidade pode começar a funcionar em poucos dias."
  }, {
    question: "O atendimento é realmente via WhatsApp?",
    answer: "Sim! Nosso atendimento principal é pelo WhatsApp, com contadores reais prontos para te ajudar de forma rápida e prática."
  }, {
    question: "Quais tipos de empresa vocês atendem?",
    answer: "Atendemos MEI, Simples Nacional, Lucro Presumido e pequenas empresas de diversos segmentos como serviços, comércio e prestadores."
  }, {
    question: "Os valores mudam depois?",
    answer: "Não! Nossos preços são fixos e transparentes. O valor que você vê é o que você paga, sem taxas escondidas ou surpresas."
  }];
  return <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas <span className="text-highlight">frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQSection;