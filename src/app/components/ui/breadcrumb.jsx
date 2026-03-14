import * as React from "react";

import { cn } from "./utils";

function Breadcrumb({ className, children, ...props }) {
  return (
    <nav data-slot="breadcrumb" className={cn("flex items-center text-sm", className)} {...props}>
      {children}
    </nav>
  );
}

export { Breadcrumb };
