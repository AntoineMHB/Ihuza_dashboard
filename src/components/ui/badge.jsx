import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gray-200 text-(--primaryBlack)",
        active: "bg-(--secondaryGreen) text-(--primaryGreen)",
        inactive: "bg-red-100 text-red-500",
        manager: "bg-(--secondaryBlue) text-(--primaryBlue)",
        admin: "bg-purple-100 text-purple-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Badge({ className, variant, text, ...props }) {
  function mapTextToVariant(text) {
    if (text === "Admin") {
      return "admin";
    } else if (text === "Manager") {
      return "manager";
    } else if (text === "Staff") {
      return "default";
    } else if (text === "Active") {
      return "active";
    } else if (text === "Inactive") {
      return "inactive";
    }
  }

  return (
    <div
      className={cn(
        badgeVariants({ variant: mapTextToVariant(text), className })
      )}
    >
      {text}
    </div>
  );
}
