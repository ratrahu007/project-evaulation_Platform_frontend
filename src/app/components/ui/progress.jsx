import * as React from "react";

import { cn } from "./utils";

function Progress({ className, value = 0, ...props }) {
  return (
    <div data-slot="progress" className={cn("w-full bg-slate-800 rounded", className)} {...props}>
      <div style={{ width: `${value}%` }} className="h-2 bg-indigo-500 rounded" />
    </div>
  );
}

export { Progress };
