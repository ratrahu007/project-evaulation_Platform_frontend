import * as React from "react";

import { cn } from "./utils";

function Sonner({ className, children, ...props }) {
  return (
    <div data-slot="sonner" className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export { Sonner };
