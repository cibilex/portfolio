import { createElement, useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'lucide-react'
import { Button } from './button'
import { Badge } from './badge'
import type { HTMLProps } from 'react'
import { cn } from '@/lib/utils'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: Array<{
    icon: React.ComponentType<HTMLProps<SVGSVGElement>>
    name: string
    color: string
  }>
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse',
      )
    }
  }, [direction])

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration =
        speed === 'fast' ? '0.2s' : speed === 'normal' ? '0.4s' : '0.8s'
      containerRef.current.style.setProperty('--animation-duration', duration)
    }
  }, [speed, direction])

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }, [getDirection, getSpeed])

  useEffect(() => {
    addAnimation()
  }, [addAnimation])

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item) => (
          <li key={item.name}>
            <Badge asChild variant="outline" size="lg">
              <a
                href={`https://${item.name}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 h-full  gap-2"
              >
                {createElement(item.icon, { width: 30, height: 30 })}
                {item.name}
              </a>
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
