'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "glassmorphic hover:scale-[1.02] text-white/90 hover:text-white",
        glow: "glassmorphic-glow hover:scale-[1.02] text-white/90 hover:text-white",
        floating: "glassmorphic-floating hover:scale-[1.02] text-white/90 hover:text-white",
        depth: "glassmorphic-depth hover:scale-[1.02] text-white/90 hover:text-white",
        outline: "border border-white/10 hover:border-white/20 glassmorphic hover:scale-[1.02] text-white/90 hover:text-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button"

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Component
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
          
          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>

          {/* Hover underline effect */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/50 to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-xl" />
        </Component>
      </motion.div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 