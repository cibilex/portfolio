import { createFileRoute } from '@tanstack/react-router'
import { ThemeProvider } from '@/providers/theme.provider'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <ThemeProvider>
      <Button>hi world</Button>
    </ThemeProvider>
  )
}
