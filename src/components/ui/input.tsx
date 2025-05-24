import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border bg-[#1a1a1a] border-gray-800 px-3 py-1 text-sm shadow-sm transition-colors",
          "text-gray-100 placeholder:text-gray-500",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400/50 focus-visible:border-purple-400/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input } 