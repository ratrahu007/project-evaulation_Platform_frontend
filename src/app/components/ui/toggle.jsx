import * as React from "react";

import { cn } from "./utils";

function Toggle({ className, ...props }) {
  return (
    <button data-slot="toggle" className={cn("inline-flex items-center", className)} {...props} />
  );
}

export { Toggle };
