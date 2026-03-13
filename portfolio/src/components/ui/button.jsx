import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[#238636] text-white hover:bg-[#2ea043] border border-[rgba(240,246,252,0.1)]",
    secondary: "bg-[#21262d] text-[#c9d1d9] border border-[#30363d] hover:bg-[#30363d] hover:border-[#8b949e] hover:text-white",
    outline: "bg-transparent text-[#c9d1d9] border border-[#30363d] hover:bg-[#21262d] hover:border-[#8b949e]",
    ghost: "bg-transparent hover:bg-[#161b22] text-[#58a6ff] hover:text-[#79c0ff] border border-transparent",
  };
  const sizes = {
    default: "h-8 px-4 py-1 text-sm font-medium",
    sm: "h-7 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8 text-base",
    icon: "h-9 w-9",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-[#0d1117] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6feb] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
