import * as React from "react";

import { cn } from "./utils";

function ScrollArea({ className, children, ...props }) {
  return (
    <div data-slot="scroll-area" className={cn("overflow-auto", className)} {...props}>
      {children}
    </div>
  );
}

export { ScrollArea };
