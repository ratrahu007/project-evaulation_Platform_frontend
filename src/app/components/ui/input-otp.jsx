import * as React from "react";

import { cn } from "./utils";

function InputOTP({ className, length = 4, ...props }) {
  return (
    <div data-slot="input-otp" className={cn("flex gap-2", className)} {...props}>
      {Array.from({ length }).map((_, i) => (
        <input key={i} className="w-10 text-center" />
      ))}
    </div>
  );
}

export { InputOTP };
