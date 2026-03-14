import * as React from "react";

import { cn } from "./utils";

function Tabs({ className, children, ...props }) {
  return (
    <div data-slot="tabs" className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

export { Tabs };
