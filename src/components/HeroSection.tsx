import { motion } from 'framer-motion'
import { ProfileCard } from './ProfileCard'
import { GridBackground } from '@/components/ui/GridBackground'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export const HeroSection = () => {
  return (
    <GridBackground>
      {/* Theme Toggle - Fixed position */}
      <div className="absolute right-4 top-4 z-50 sm:right-8 sm:top-8">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          <ProfileCard />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 -z-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 -z-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
    </GridBackground>
  )
}
