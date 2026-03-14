import * as React from "react";

import { cn } from "./utils";

function Slider({ className, ...props }) {
  return (
    <input type="range" data-slot="slider" className={cn("w-full", className)} {...props} />
  );
}

export { Slider };
