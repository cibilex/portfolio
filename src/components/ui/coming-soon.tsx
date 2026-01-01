import { cn } from '@/lib/utils'

function ComingSoon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center  font-extralight p-4 italic ',
        className,
      )}
    >
      Coming Soon ... :)
    </div>
  )
}

export default ComingSoon
