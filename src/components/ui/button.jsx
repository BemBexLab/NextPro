import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center gap-2.5 justify-center max-h-[52px] whitespace-nowrap text-lg font-bold ring-offset-background border-2 border-[#BF0B30] transition-colors transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#BF0B30] text-secondary-foreground dark:text-muted-foreground hover:bg-transparent hover:text-[#BF0B30] rounded-lg",
        destructive: "bg-background text-[#BF0B30] rounded-full border-[#BF0B30]",
        outline:
          "border-2 border-[#BF0B30] bg-transparent text-[#BF0B30] dark:text-muted-foreground hover:bg-[#BF0B30] hover:text-secondary-foreground rounded-lg",
        secondary:
          "bg-[#F08080] text-[#BF0B30] rounded-lg rounded-[40px] border-transparent max-h-[43px]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[33px] py-4",
        sm: "py-[5px] px-5 rounded-md",
        lg: "px-[38px] py-4",
        xl: "px-12 py-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
