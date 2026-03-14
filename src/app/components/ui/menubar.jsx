import * as React from "react";

import { cn } from "./utils";

function Menubar({ className, children, ...props }) {
  return (
    <div data-slot="menubar" className={cn("flex items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
}

export { Menubar };
