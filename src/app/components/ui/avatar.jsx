import * as React from "react";

import { cn } from "./utils";

const Avatar = ({ className, ...props }) => {
  return (
    <div data-slot="avatar" className={cn("inline-flex items-center justify-center overflow-hidden rounded-full", className)} {...props} />
  );
};

export { Avatar };
