import * as React from "react";

import { cn } from "./utils";

function Carousel({ className, children, ...props }) {
  return (
    <div data-slot="carousel" className={cn("relative overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

export { Carousel };
