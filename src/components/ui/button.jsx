import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center gap-2.5 justify-center max-h-[52px] whitespace-nowrap text-lg font-bold ring-offset-background border-2 border-primary transition-colors transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-secondary-foreground dark:text-muted-foreground hover:bg-transparent hover:text-primary-foreground rounded-lg",
        destructive: "bg-background text-primary-foreground rounded-full border-background",
        outline:
          "border-2 border-primary bg-transparent text-primary-foreground dark:text-muted-foreground hover:bg-primary hover:text-secondary-foreground rounded-lg",
        secondary:
          "bg-accent text-primary-foreground rounded-lg rounded-[40px] border-transparent max-h-[43px]",
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
