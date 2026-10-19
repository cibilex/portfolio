import { Send, Sparkles } from 'lucide-react'
import type React from 'react'

export const projects: Array<{
  icon: React.ComponentType<{ className?: string }>
  name: string
  description: string
  url: string
  color: string
  tags: Array<string>
}> = [
  {
    icon: Sparkles,
    name: 'cibilex.fun',
    description:
      'My personal portfolio with interactive 3D cards and smooth animations.',
    url: 'https://cibilex.fun',
    color: '#8b5cf6',
    tags: ['React', 'TanStack Start', 'Tailwind', 'Motion'],
  },
  {
    icon: Send,
    name: 'XForm',
    description:
      'A Telegram bot to create and answer forms, with a web dashboard to view your forms.',
    url: 'https://xform.cibilex.fun',
    color: '#229ed9',
    tags: ['Telegram Bot', 'Vue', 'Vite'],
  },
]
