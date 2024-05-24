import React from "react";
import { cn } from "src/lib/utils";
import "./skeleton.scss";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("skeleton animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
