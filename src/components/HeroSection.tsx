import { motion } from 'framer-motion'
import Profile from './profile'
import type { Variants } from 'framer-motion'
import { GridBackground } from '@/components/ui/GridBackground'

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}
export const HeroSection = () => {
  return (
    <GridBackground>
      {/* Main Content */}
      <motion.div variants={cardVariants} initial="initial" animate="animate">
        <Profile />
      </motion.div>
    </GridBackground>
  )
}
