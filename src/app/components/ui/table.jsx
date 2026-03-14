import * as React from "react";

import { cn } from "./utils";

function Table({ className, children, ...props }) {
  return (
    <div data-slot="table" className={cn("w-full overflow-auto", className)} {...props}>
      {children}
    </div>
  );
}

export { Table };
