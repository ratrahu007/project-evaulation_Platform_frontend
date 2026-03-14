import * as React from "react";

import { cn } from "./utils";

function HoverCard({ className, children, ...props }) {
  return (
    <div data-slot="hover-card" className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

export { HoverCard };
