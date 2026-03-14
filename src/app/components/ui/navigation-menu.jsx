import * as React from "react";

import { cn } from "./utils";

function NavigationMenu({ className, children, ...props }) {
  return (
    <nav data-slot="navigation-menu" className={cn("flex", className)} {...props}>
      {children}
    </nav>
  );
}

export { NavigationMenu };
