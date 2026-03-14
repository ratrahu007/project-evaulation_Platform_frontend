import * as React from "react";

import { cn } from "./utils";

function Drawer({ className, children, ...props }) {
  return (
    <div data-slot="drawer" className={cn("fixed inset-0 z-50", className)} {...props}>
      {children}
    </div>
  );
}

export { Drawer };
