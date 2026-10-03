import type { ReactNode } from "react";

type BrushHeadingProps = {
  children: ReactNode;
  className?: string;
};

const BrushHeading = ({ children, className = "" }: BrushHeadingProps) => (
  <h2
    className={`relative isolate inline-block max-w-full px-[0.9em] py-[0.5em] font-bold leading-[1.2] tracking-tight text-white ${className}`}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-[0.15em] top-1/2 z-0 h-[2.6em] -translate-y-1/2"
    >
      <svg
        viewBox="0 0 1000 140"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 48C44 43 57 47 79 41C111 34 136 43 168 37C201 31 229 39 262 34C298 29 327 37 362 32C397 28 431 36 466 32C505 28 535 36 574 32C614 28 644 35 682 31C721 27 751 35 790 32C833 29 867 35 906 32L980 39L948 48L994 57L957 64L988 72L951 79L983 87L950 94L989 102L951 109L976 119C956 121 940 125 913 120C878 114 848 123 815 119C779 115 748 124 714 119C677 114 647 123 611 118C574 113 543 122 506 117C470 112 437 121 400 116C364 111 332 120 295 115C259 110 226 120 190 115C157 111 126 119 94 114C65 110 43 116 15 110L42 101L5 94L39 85L8 77L43 69L12 60L47 54Z"
          fill="#111111"
        />
        <path
          d="M856 36L983 42L932 47M882 53L996 59L946 64M900 77L989 82L950 86M876 106L987 111L943 116M1 105L56 111L34 116"
          stroke="#111111"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="relative z-10">{children}</span>
  </h2>
);

export default BrushHeading;
