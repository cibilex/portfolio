import { motion } from 'framer-motion'
import { Bot, Download, MapPin } from 'lucide-react'
import { SocialLinks } from './SocialLinks'
import { TechStack } from './TechStack'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Button } from '@/components/ui/button'
import { Meteors } from '@/components/ui/Meteors'

export const ProfileCard = () => {
  return (
    <CardContainer containerClassName="py-0">
      <CardBody className="group relative w-full max-w-md rounded-2xl">
        {/* Animated gradient border on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary animate-[rotate-gradient_4s_linear_infinite]" />
        </div>

        {/* Static gradient border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40" />

        {/* Card content */}
        <div
          className="relative overflow-hidden rounded-2xl bg-card/95 p-6 backdrop-blur-md"
          style={{
            clipPath:
              'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
          }}
        >
          {/* Corner accent */}
          <CardItem
            translateZ={30}
            className="absolute bottom-0 right-0 h-6 w-6"
          >
            <div className="absolute bottom-0 right-0 h-[1px] w-6 bg-gradient-to-l from-primary/60 to-transparent" />
            <div className="absolute bottom-0 right-0 h-6 w-[1px] bg-gradient-to-t from-primary/60 to-transparent" />
          </CardItem>

          {/* Inner glow effect */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          {/* Meteors effect */}
          <Meteors number={20} />

          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Profile Header */}
            <div className="flex items-start gap-4">
              <CardItem translateZ={80} className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    delay: 0.2,
                  }}
                  className="relative"
                >
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/80 via-accent/70 to-primary/80 p-[2px]">
                    <div className="h-full w-full rounded-full bg-card p-[2px]">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=developer"
                        alt="John Developer profile avatar"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-card bg-success" />
                </motion.div>
              </CardItem>

              <CardItem translateZ={55} className="flex-1">
                <div className="flex-1 space-y-1">
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold tracking-tight text-foreground"
                  >
                    John Developer
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
                    className="flex items-center gap-1 text-xs text-muted-foreground"
                  >
                    <MapPin className="h-3 w-3" />
                    <span>San Francisco, CA</span>
                  </motion.div>
                </div>
              </CardItem>
            </div>

            {/* Bio */}
            <CardItem translateZ={40} className="w-full">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                Building modern web experiences with cutting-edge technologies.
                Passionate about clean code, performance, and developer
                experience.
              </motion.p>
            </CardItem>

            {/* Tech Stack */}
            <CardItem translateZ={35} className="w-full">
              <TechStack />
            </CardItem>

            {/* Social Links */}
            <CardItem translateZ={45} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <SocialLinks />
              </motion.div>
            </CardItem>

            {/* Action Buttons */}
            <CardItem translateZ={60} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col gap-3 pt-2 sm:flex-row"
              >
                <Button
                  variant="default"
                  className="flex-1 gap-2 bg-gradient-to-r from-primary/85 to-accent/85 transition-opacity hover:opacity-95"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  className="group flex-1 gap-2 border-primary/30 transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                  <Bot className="h-4 w-4 group-hover:animate-pulse" />
                  <span className="gradient-text font-medium">
                    Ask me to AI's
                  </span>
                </Button>
              </motion.div>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  )
}
