import * as React from "react";

import { cn } from "./utils";

function Collapsible({ className, children, ...props }) {
  return (
    <div data-slot="collapsible" className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

export { Collapsible };
