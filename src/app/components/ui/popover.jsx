import * as React from "react";

import { cn } from "./utils";

function Popover({ className, children, ...props }) {
  return (
    <div data-slot="popover" className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

export { Popover };
