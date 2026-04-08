import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PlansSection from "@/components/PlansSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormDialog from "@/components/LeadFormDialog";
import { LeadFormProvider } from "@/contexts/LeadFormContext";

const Index = () => {
  return (
    <LeadFormProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <BenefitsSection />
          <HowItWorksSection />
          <PlansSection />
          <ObjectionsSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
        <LeadFormDialog />
      </div>
    </LeadFormProvider>
  );
};

export default Index;
