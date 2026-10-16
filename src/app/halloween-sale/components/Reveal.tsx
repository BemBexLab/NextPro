import RevealOnScroll from "@/components/animations/RevealOnScroll";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
  return (
    <RevealOnScroll
      className={className}
      direction="up"
      threshold={0.12}
    >
      {children}
    </RevealOnScroll>
  );
}
