import * as React from "react";

import { cn } from "./utils";

function Checkbox({ className, children, ...props }) {
  return (
    <label data-slot="checkbox" className={cn("inline-flex items-center gap-2", className)}>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );
}

export { Checkbox };
