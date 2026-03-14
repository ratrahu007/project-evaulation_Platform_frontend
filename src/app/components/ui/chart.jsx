import * as React from "react";

import { cn } from "./utils";

function Chart({ className, children, ...props }) {
  return (
    <div data-slot="chart" className={cn("w-full", className)} {...props}>
      {children}
    </div>
  );
}

export { Chart };
