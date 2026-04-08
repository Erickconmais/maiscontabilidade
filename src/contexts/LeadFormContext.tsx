import React, { createContext, useContext, useState, useCallback } from "react";
import { PlanType } from "@/lib/whatsapp";

interface LeadFormContextType {
  openLeadForm: (plan?: PlanType) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedPlan: PlanType;
}

const LeadFormContext = createContext<LeadFormContextType | null>(null);

export const useLeadForm = () => {
  const ctx = useContext(LeadFormContext);
  if (!ctx) throw new Error("useLeadForm must be used within LeadFormProvider");
  return ctx;
};

export const LeadFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("geral");

  const openLeadForm = useCallback((plan: PlanType = "geral") => {
    setSelectedPlan(plan);
    setIsOpen(true);
  }, []);

  return (
    <LeadFormContext.Provider value={{ openLeadForm, isOpen, setIsOpen, selectedPlan }}>
      {children}
    </LeadFormContext.Provider>
  );
};
