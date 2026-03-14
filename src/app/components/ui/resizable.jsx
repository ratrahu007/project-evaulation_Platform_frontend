import * as React from "react";

import { cn } from "./utils";

function Resizable({ className, children, ...props }) {
  return (
    <div data-slot="resizable" className={cn("resize", className)} {...props}>
      {children}
    </div>
  );
}

export { Resizable };
