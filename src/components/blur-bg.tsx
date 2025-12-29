import { cn } from '@/lib/utils'

function BlurBg({ className }: { className?: string }) {
  return (
    <>
      {/* Mavi blur - tam ortada */}
      <div
        className={cn(
          'pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-3/4 w-3/4 rounded-full bg-blue-500/70  blur-3xl',
          className,
        )}
      />

      {/* Mor blur - biraz offset (opsiyonel, daha güzel görünüm için) */}
      <div
        className={cn(
          'pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-2/3 w-2/3 rounded-full bg-purple-500/70  blur-3xl',
          className,
        )}
      />
    </>
  )
}

export default BlurBg
