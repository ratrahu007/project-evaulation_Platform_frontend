import * as React from "react";

import { cn } from "./utils";

function Pagination({ className, children, ...props }) {
  return (
    <nav data-slot="pagination" className={cn("flex items-center gap-2", className)} {...props}>
      {children}
    </nav>
  );
}

export { Pagination };
