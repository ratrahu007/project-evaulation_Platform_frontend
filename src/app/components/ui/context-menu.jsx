import * as React from "react";

import { cn } from "./utils";

function ContextMenu({ className, children, ...props }) {
  return (
    <div data-slot="context-menu" className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

export { ContextMenu };
