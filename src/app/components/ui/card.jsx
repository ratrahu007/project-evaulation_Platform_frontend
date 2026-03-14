import * as React from "react";

import { cn } from "./utils";

function Card({ className, children, ...props }) {
  return (
    <div data-slot="card" className={cn("rounded-lg border bg-card p-4", className)} {...props}>
      {children}
    </div>
  );
}

export { Card };
