import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './button'
import { useTheme } from '@/providers/theme.provider'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <motion.div
      initial={false}
      animate={{ rotate: theme === 'dark' ? 0 : 180, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5 text-primary" />
        ) : (
          <Sun className="h-5 w-5 text-primary" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  )
}
