import { Mail, X } from 'lucide-react'
import type { ComponentType } from 'react'

export type SocialLink = {
  icon: ComponentType<{ className?: string }>
  href: string
  label: string
  color: string
}
export const socialLinks: Array<SocialLink> = [
  {
    icon: Mail,
    href: 'https://github.com',
    label: 'GitHub',
    color: 'hover:text-foreground',
  },
  {
    icon: Mail,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:text-primary',
  },
  {
    icon: X,
    href: 'https://twitter.com',
    label: 'Twitter',
    color: 'hover:text-primary',
  },
  {
    icon: Mail,
    href: 'mailto:hello@example.com',
    label: 'Email',
    color: 'hover:text-accent',
  },
]
