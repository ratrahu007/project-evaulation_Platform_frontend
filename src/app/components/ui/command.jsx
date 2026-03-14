import * as React from "react";

import { cn } from "./utils";

function Command({ className, children, ...props }) {
  return (
    <div data-slot="command" className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

export { Command };
