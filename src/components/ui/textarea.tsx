import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border bg-[#1a1a1a] border-gray-800 px-3 py-2 text-sm shadow-sm transition-colors",
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
Textarea.displayName = "Textarea"

export { Textarea } 