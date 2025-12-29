import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './button'
import { useTheme } from '@/providers/theme.provider'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="h-10 w-10 absolute right-4 top-4 z-50 sm:right-8 sm:top-8 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-colors"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5 text-primary" />
        ) : (
          <Sun className="h-5 w-5 text-primary" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
