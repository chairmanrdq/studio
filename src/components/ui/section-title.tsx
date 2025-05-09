import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export function SectionTitle({ children, id, className }: SectionTitleProps) {
  return (
    <h2 
      id={id} 
      className={cn(
        "text-2xl sm:text-3xl font-bold mb-6 md:mb-8 pb-2 border-b-2 border-primary/30 text-primary", 
        className
      )}
    >
      {children}
    </h2>
  );
}
