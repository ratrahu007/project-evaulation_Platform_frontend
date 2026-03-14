import * as React from "react";

import { cn } from "./utils";

function Switch({ className, ...props }) {
  return (
    <button data-slot="switch" className={cn("inline-flex items-center", className)} {...props} />
  );
}

export { Switch };
