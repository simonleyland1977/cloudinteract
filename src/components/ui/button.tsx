import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {

    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95"

    const variants = {
      primary: "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25",
      secondary: "bg-secondary text-secondary-foreground hover:brightness-110",
      outline: "border border-input bg-transparent hover:bg-white/5 text-foreground",
      ghost: "hover:bg-white/5 text-foreground",
    }

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
    }

    const classes = cn(baseStyles, variants[variant], sizes[size], className)

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
