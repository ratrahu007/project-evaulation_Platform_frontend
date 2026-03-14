import * as React from "react";

import { cn } from "./utils";

function RadioGroup({ className, children, ...props }) {
  return (
    <div data-slot="radio-group" className={cn("flex gap-2", className)} {...props}>
      {children}
    </div>
  );
}

export { RadioGroup };
