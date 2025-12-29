import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Meteors } from './Meteors'
import { cn } from '@/lib/utils'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const handleMouseEnter = () => {
    setIsMouseEntered(true)
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn('flex items-center justify-center', containerClassName)}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'flex flex-col  p-6  rounded-xl   group z-50 justify-center relative transition-all duration-200 ease-linear transform-3d **:transform-3d',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBackground = ({
  className,
  meteorsNumber = 5,
  showMeteors = true,
}: {
  className?: string
  meteorsNumber?: number
  showMeteors?: boolean
}) => {
  return (
    <CardItem
      translateZ={0}
      className={cn(
        'absolute inset-0 w-full h-full overflow-hidden rounded-2xl bg-card/95 backdrop-blur-md',
        className,
      )}
    >
      {showMeteors && <Meteors number={meteorsNumber} />}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10" />
    </CardItem>
  )
}
export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  [key: string]: unknown
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  const withPx = (v: number | string) => (typeof v === 'number' ? `${v}px` : v)
  const withDeg = (v: number | string) =>
    typeof v === 'number' ? `${v}deg` : v

  const handleAnimations = useCallback(() => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${withPx(
        translateX,
      )}) translateY(${withPx(translateY)}) translateZ(${withPx(
        translateZ,
      )}) rotateX(${withDeg(rotateX)}) rotateY(${withDeg(
        rotateY,
      )}) rotateZ(${withDeg(rotateZ)})`
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ])

  useEffect(() => {
    handleAnimations()
  }, [handleAnimations])

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-transform duration-200 ease-linear transform-3d d [will-change:transform]',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return context
}
