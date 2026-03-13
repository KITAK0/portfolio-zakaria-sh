import * as React from "react";
import { cn } from "../../lib/utils";

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-[#1f6feb]/10 text-[#58a6ff] hover:bg-[#1f6feb]/20",
    secondary: "border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]",
    outline: "text-[#8b949e] border-[#30363d]",
    success: "border-[#2ea043] text-[#3fb950] bg-[#2ea043]/10",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1f6feb] focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
