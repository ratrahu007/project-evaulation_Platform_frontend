import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }) {
  return (
    <textarea data-slot="textarea" className={cn("min-h-[80px] w-full rounded-md border px-3 py-2", className)} {...props} />
  );
}

export { Textarea };
