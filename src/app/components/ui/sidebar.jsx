import * as React from "react";

import { cn } from "./utils";

function Sidebar({ className, children, ...props }) {
  return (
    <aside data-slot="sidebar" className={cn("w-64", className)} {...props}>
      {children}
    </aside>
  );
}

export { Sidebar };
