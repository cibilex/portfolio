import { createFileRoute } from '@tanstack/react-router'
import { ThemeProvider } from '@/providers/theme.provider'
import { HeroSection } from '@/components/HeroSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <ThemeProvider>
      <HeroSection />
    </ThemeProvider>
  )
}
