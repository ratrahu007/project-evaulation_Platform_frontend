import * as React from "react";

import { cn } from "./utils";

function DropdownMenu({ className, children, ...props }) {
  return (
    <div data-slot="dropdown-menu" className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

export { DropdownMenu };
