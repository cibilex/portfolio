import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const separatorVariants = cva(
  'bg-border shrink-0 data-[orientation=horizontal]:h-px   data-[orientation=vertical]:w-px',
  {
    variants: {
      size: {
        full: 'data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full',
        lg: 'data-[orientation=vertical]:h-1/2 data-[orientation=horizontal]:w-1/2',
        md: 'data-[orientation=vertical]:h-1/3 data-[orientation=horizontal]:w-1/3',
        xs: 'data-[orientation=vertical]:h-1/4 data-[orientation=horizontal]:w-1/4',
      },
    },
    defaultVariants: {
      size: 'full',
    },
  },
)
function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  size = 'full',
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof separatorVariants>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        separatorVariants({ size }),
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
