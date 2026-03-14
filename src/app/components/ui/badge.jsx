import * as React from "react";

import { cn } from "./utils";

function Badge({ className, children, ...props }) {
  return (
    <span data-slot="badge" className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium", className)} {...props}>
      {children}
    </span>
  );
}

export { Badge };
