import * as React from "react";

import { cn } from "./utils";

function ToggleGroup({ className, children, ...props }) {
  return (
    <div data-slot="toggle-group" className={cn("inline-flex gap-2", className)} {...props}>
      {children}
    </div>
  );
}

export { ToggleGroup };
