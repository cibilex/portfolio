'use client'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export const Meteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const meteorCount = number || 20
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    // SSR-safe: Initialize with deterministic positions (no random values)
    new Array(meteorCount).fill(true).map((_, idx) => {
      const position = idx * (800 / meteorCount) - 200
      return {
        top: '-100px',
        left: position + 'px',
        animationDelay: '0s',
        animationDuration: '5s',
      }
    }),
  )

  useEffect(() => {
    // Client-side: Update with random values after mount
    const styles = new Array(meteorCount).fill(true).map((_, idx) => {
      const position = idx * (800 / meteorCount) - 200
      return {
        top: '-100px',
        left: position + 'px',
        animationDelay: Math.random() * 1 + 's',
        animationDuration: Math.floor(Math.random() * 8 + 2) + 's',
      }
    })
    setMeteorStyles(styles)
  }, [meteorCount])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'animate-meteor-effect dark:bg-blue-500 dark:shadow-blue-500 absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[210px] rounded-[9999px] bg-blue-700/80 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]',
            "before:pointer-events-none before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r dark:before:from-blue-500 before:from-blue-700/60 before:to-transparent before:content-['']",
            className,
          )}
          style={style}
        ></span>
      ))}
    </motion.div>
  )
}
