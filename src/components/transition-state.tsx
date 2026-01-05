import { motion } from 'motion/react'
import { UndoDot } from 'lucide-react'
import { Button } from './ui/button'
import {
  useTransitionActions,
  useTransitionModified,
} from '@/store/use-transition'

export const TransitionState = () => {
  const modified = useTransitionModified()
  const resetTransition = useTransitionActions()

  return (
    <motion.div
      initial={false}
      animate={{
        x: modified ? 0 : 50,
        opacity: modified ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        type: 'spring',
      }}
      style={{
        pointerEvents: modified ? 'auto' : 'none',
      }}
      className='order-first md:order-last'
    >
      <Button variant="ghost" size="icon" onClick={resetTransition.resetState}>
        <UndoDot />
      </Button>
      <span className="sr-only">Reset Transition</span>
    </motion.div>
  )
}

export default TransitionState
