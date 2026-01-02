import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { socialLinks } from '@/constants/social-links.contants'

function ProfileSocialLinks() {
  return (
    <div className="flex items-center gap-3 overflow-hidden">
      {socialLinks.map((social, index) => (
        <Button key={social.label} variant="ghost" size="icon" asChild>
          <motion.a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'spring',
              duration: 0.5,
              delay: index * 0.1 + 0.4,
            }}
            className=" text-muted-foreground hover:text-foreground"
            aria-label={social.label}
          >
            <social.icon />
          </motion.a>
        </Button>
      ))}
    </div>
  )
}

export default ProfileSocialLinks
