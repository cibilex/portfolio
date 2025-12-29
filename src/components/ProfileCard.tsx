import { motion } from 'framer-motion'
import { Bot, Download, MapPin } from 'lucide-react'
import { SocialLinks } from './SocialLinks'
import { TechStack } from './TechStack'
import BlurBg from './blur-bg'
import HoverBorder from './hover-border'
import { Button } from './ui/button'
import type { Variants } from 'framer-motion'
import {
  CardBackground,
  CardContainer,
  CardItem,
} from '@/components/ui/3d-card'

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
export const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-20 pt-10">
      <CardContainer className="w-xl">
        <BlurBg />
        <HoverBorder />
        <CardBackground />

        <div className="flex  gap-4  mb-4  transform-3d">
          {/* Profile Avatar */}
          <CardItem translateZ={100}>
            <motion.div variants={avatarVariants}>
              <div className="h-20 w-20  rounded-full bg-linear-to-br from-primary/80 via-purple-500/70 to-primary/80 p-[2px]">
                <motion.div
                  initial={{ rotate: -180 * 6 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 5, type: 'spring' }}
                  className=" absolute -inset-1 border-l border-l-purple-400/50  rotate-[-70deg] z-0 rounded-full "
                ></motion.div>
                <div className="h-full w-full rounded-full bg-card p-[2px]">
                  <img
                    src="https://avatars.githubusercontent.com/u/55107569?v=4"
                    alt="John Developer profile avatar"
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
              className="text-2xl/tight font-bold tracking-tight text-foreground"
            >
              Mehmet İLHAN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="text-sm font-medium gradient-text"
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
              <span>San Francisco, CA</span>
            </motion.div>
          </CardItem>
        </div>

        <CardItem translateZ={40} className="w-full ">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            Building modern web experiences with cutting-edge technologies.
            Passionate about clean code, performance, and developer experience.
          </motion.p>
        </CardItem>

        <CardItem translateZ={45} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <SocialLinks />
          </motion.div>
        </CardItem>
      </CardContainer>
      <CardContainer className="w-xl">
        <BlurBg />
        <HoverBorder />
        <CardBackground showMeteors={false} />

        <CardItem translateZ={35} className="w-full">
          <TechStack />
        </CardItem>
      </CardContainer>
      <CardContainer className="w-xl">
        <BlurBg className="blur-xl" />
        <HoverBorder />
        <CardBackground showMeteors={false} />
        hi world
      </CardContainer>

      <CardContainer className="w-md">
        <BlurBg className="blur-xl" />
        <HoverBorder />
        <CardBackground showMeteors={false} />

        <CardItem translateZ={45} className="w-full">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-around w-full"
          >
            <Button variant="outline">Download CV</Button>
            <Button>Ask me to AI's</Button>
          </motion.button>
        </CardItem>
      </CardContainer>
    </div>
  )
}
