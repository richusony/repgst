import type { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700",
        className,
      )}
      {...props}
    />
  );
}
