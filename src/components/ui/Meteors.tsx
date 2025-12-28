'use client'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export const Meteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const meteors = new Array(number || 20).fill(true)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (800 / meteorCount) - 200 // Spread across 800px range, centered

        return (
          <span
            key={'meteor' + idx}
            className={cn(
              'animate-meteor-effect absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[210px] rounded-[9999px] bg-blue-700/80 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]',
              "before:pointer-events-none before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-blue-700/60 before:to-transparent before:content-['']",

              // 'animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
              // "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: '-100px', // Start above the container
              left: position + 'px',
              animationDelay: Math.random() * 1 + 's',
              animationDuration: Math.floor(Math.random() * 8 + 2) + 's',
            }}
          ></span>
        )
      })}
    </motion.div>
  )
}
