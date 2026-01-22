const WHATSAPP_NUMBER = "5562991623979";

export type PlanType = "essencial" | "plus" | "premium" | "geral";

const planMessages: Record<PlanType, string> = {
  essencial: "Olá! Vim pelo site da Mais Contabilidade Online e quero saber mais sobre o Plano Essencial (R$149).",
  plus: "Olá! Vim pelo site da Mais Contabilidade Online e tenho interesse no Plano Plus (R$199), o plano recomendado.",
  premium: "Olá! Vim pelo site da Mais Contabilidade Online e quero conhecer melhor o Plano Premium (R$298).",
  geral: "Olá! Vim pelo site da Mais Contabilidade Online e quero falar com um contador.",
};

export const getWhatsAppLink = (plan: PlanType = "geral"): string => {
  const message = encodeURIComponent(planMessages[plan]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const openWhatsApp = (plan: PlanType = "geral"): void => {
  window.open(getWhatsAppLink(plan), "_blank");
};
