import * as React from "react";

import { cn } from "./utils";

function Form({ className, children, ...props }) {
  return (
    <form data-slot="form" className={cn("space-y-4", className)} {...props}>
      {children}
    </form>
  );
}

export { Form };
