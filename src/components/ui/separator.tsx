"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  HTMLDivElement, // Changed to HTMLDivElement as it can be a div or SeparatorPrimitive.Root (which is also a div)
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    children?: React.ReactNode // Allow children for icon-in-middle style
  }
>(
  (
    { className, orientation = "horizontal", decorative = true, children, ...props },
    ref
  ) => {
    // If children are provided and orientation is horizontal, render the "icon-in-middle" style
    if (children && orientation === "horizontal") {
      return (
        <div
          ref={ref}
          role={decorative ? "none" : "separator"} // Apply ARIA role
          aria-orientation="horizontal"
          className={cn(
            "flex w-full items-center", // Use flex to layout lines and content
            className
          )}
          {...props}
        >
          <div className="flex-grow border-t border-border" /> {/* Left line */}
          <span className="mx-2 shrink-0 text-muted-foreground"> {/* Content in the middle */}
            {children}
          </span>
          <div className="flex-grow border-t border-border" /> {/* Right line */}
        </div>
      )
    }

    // Original Separator for vertical lines or horizontal lines without children
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    )
  }
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
