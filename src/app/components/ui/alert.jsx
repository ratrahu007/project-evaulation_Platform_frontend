import * as React from "react";

import { cn } from "./utils";

function Alert({ className, children, ...props }) {
  return (
    <div data-slot="alert" className={cn("rounded-md p-4", className)} {...props}>
      {children}
    </div>
  );
}

export { Alert };
