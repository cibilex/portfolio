import { motion } from 'framer-motion'
import { Mail, X } from 'lucide-react'

const socialLinks = [
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

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground transition-all duration-300 ${social.color}`}
          aria-label={social.label}
        >
          <social.icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  )
}
