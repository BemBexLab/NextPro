"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicePopupTrigger = ({ onClick }: { onClick: () => void }) => (
  <Button
    type="button"
    onClick={onClick}
    className="min-h-12 w-full rounded-xl bg-[#BF0B30] px-6 text-base font-bold text-white shadow-[0_8px_24px_rgba(191,11,48,0.32)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#a00928] hover:text-white hover:shadow-[0_12px_28px_rgba(191,11,48,0.4)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102c57] sm:w-auto sm:min-w-56"
  >
    Get Started <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
  </Button>
);

export default ServicePopupTrigger;
