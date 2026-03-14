import * as React from "react";

import { cn } from "./utils";

function AspectRatio({ ratio = 1, children, className, ...props }) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative", className)}
      style={{ aspectRatio: String(ratio) }}
      {...props}
    >
      {children}
    </div>
  );
}

export { AspectRatio };
