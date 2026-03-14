import * as React from "react";

import { cn } from "./utils";

function Accordion({ className, children, ...props }) {
  return (
    <div data-slot="accordion" className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  );
}

export { Accordion };
