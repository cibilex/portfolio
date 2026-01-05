import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'
import BlurBg from '../blur-bg'
import HoverBorder from '../hover-border'
import { CardBackground, CardContainer, CardItem } from '../ui/3d-card'
import ProfileSocialLinks from './profile-social-links'
import type { Variants } from 'motion/react'

const avatarVariants: Variants = {
  initial: {
    scale: 0,
    rotate: -180,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      delay: 0.2,
    },
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      delay: 0.2,
    },
  },
}

function ProfileHeader() {
  return (
    <CardContainer transitionField="profileHeader" className="w-[90%] md:w-xl">
      <BlurBg />
      <HoverBorder />
      <CardBackground />

      <div className="flex   gap-4 mb-3 md:mb-4  transform-3d">
        {/* Profile Avatar */}
        <CardItem translateZ={100}>
          <motion.div variants={avatarVariants}>
            <div className="md:h-20 md:w-20 w-16 h-16   rounded-full bg-linear-to-br from-primary/80 via-purple-500/70 to-primary/80 p-[2px]">
              <motion.div
                initial={{ rotate: -180 * 6 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 5, type: 'spring' }}
                className=" absolute -inset-1 border-l border-l-purple-400/50  rotate-[-70deg] z-0 rounded-full "
              ></motion.div>
              <div className="h-full w-full rounded-full bg-card p-[2px]">
                <img
                  src="/avatar.png"
                  alt="Mehmet İLHAN profile avatar"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </CardItem>

        {/* Profile Info */}
        <CardItem translateX={20} translateZ={55}>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl/tight md:text-2xl/tight font-bold tracking-tight text-foreground"
          >
            Mehmet İLHAN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="text-sm md:text-sm font-medium gradient-text"
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center mt-1 gap-1 text-xs text-muted-foreground"
          >
            <MapPin className="h-3 w-3" />
            <span>Turkey</span>
          </motion.div>
        </CardItem>
      </div>

      <CardItem translateZ={40} className="w-full ">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-xs md:text-sm leading-relaxed text-muted-foreground"
        >
          Delivering <strong>high-performance web applications</strong> with
          modern technologies, focusing on clean architecture, code quality, and
          long-term maintainability.
        </motion.p>
      </CardItem>

      <CardItem translateZ={45} className="w-full">
        <ProfileSocialLinks />
      </CardItem>
    </CardContainer>
  )
}

export default ProfileHeader
