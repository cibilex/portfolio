import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import GithubIcon from '@/components/icons/github'
import LinkedinIcon from '@/components/icons/linkedin'
import MediumIcon from '@/components/icons/medium'

export type SocialLink = {
  icon: ComponentType<{ className?: string; color?: string }>
  href: string
  label: string
}
export const socialLinks: Array<SocialLink> = [
  {
    icon: GithubIcon,
    href: 'https://github.com/cibilex',
    label: 'GitHub',
  },
  {
    icon: LinkedinIcon,
    href: 'https://linkedin.com/in/cibilex',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:mehmetilhan1799@icloud.com',
    label: 'Email',
  },
  {
    icon: MediumIcon,
    href: 'https://medium.com/@cibilex',
    label: 'Medium',
  },
]
