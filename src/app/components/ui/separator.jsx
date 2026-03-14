import * as React from "react";

import { cn } from "./utils";

function Separator({ className, ...props }) {
  return <div data-slot="separator" className={cn("h-px bg-border", className)} {...props} />;
}

export { Separator };
