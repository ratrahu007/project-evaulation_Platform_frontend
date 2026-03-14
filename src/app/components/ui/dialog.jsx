import * as React from "react";

import { cn } from "./utils";

function Dialog({ className, children, ...props }) {
  return (
    <div data-slot="dialog" className={cn("fixed inset-0 z-50", className)} {...props}>
      {children}
    </div>
  );
}

export { Dialog };
