import * as React from "react";

import { cn } from "./utils";

function Sheet({ className, children, ...props }) {
  return (
    <div data-slot="sheet" className={cn("rounded-md", className)} {...props}>
      {children}
    </div>
  );
}

export { Sheet };
