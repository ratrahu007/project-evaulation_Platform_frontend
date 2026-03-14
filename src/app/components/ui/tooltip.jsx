import * as React from "react";

import { cn } from "./utils";

function Tooltip({ className, children, ...props }) {
  return (
    <div data-slot="tooltip" className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

export { Tooltip };
