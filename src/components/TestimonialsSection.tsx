import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Simples, rápido e sem dor de cabeça. Finalmente encontrei uma contabilidade que entende o empreendedor.",
      author: "Maria S.",
      role: "Empresária",
      rating: 5,
    },
    {
      text: "Economizei tempo e dinheiro. O atendimento pelo WhatsApp é muito prático e sempre me respondem rápido.",
      author: "Carlos R.",
      role: "MEI",
      rating: 5,
    },
    {
      text: "Trocar de contador nunca foi tão fácil. Eles cuidaram de tudo e eu não precisei me preocupar.",
      author: "Ana Paula T.",
      role: "Dona de e-commerce",
      rating: 5,
    },
    {
      text: "Preço justo e sem surpresas. Sei exatamente quanto vou pagar todo mês. Recomendo!",
      author: "Roberto M.",
      role: "Prestador de serviços",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes{" "}
            <span className="text-primary">dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresários de todo o Brasil confiam na Mais Contabilidade Online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-primary fill-primary"
                  />
                ))}
              </div>
              
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
