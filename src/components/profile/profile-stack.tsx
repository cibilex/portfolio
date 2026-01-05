import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { CardBackground, CardContainer, CardItem } from '../ui/3d-card'
import BlurBg from '../blur-bg'
import HoverBorder from '../hover-border'
import Subtitle from '../ui/subtitle'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { Badge } from '../ui/badge'
import type { Variants } from 'motion/react'
import { technologies } from '@/constants/tech.constants'

const techStackVariants: Variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

function ProfileStack() {
  return (
    <CardContainer transitionField="profileStack" className=" w-[90%] md:w-xl">
      <BlurBg />
      <HoverBorder />
      <CardBackground showMeteors={false} />

      <CardItem translateZ={35} className="w-full">
        <TechStackContent />
      </CardItem>
    </CardContainer>
  )
}

function TechStackContent() {
  return (
    <div className="space-y-2 overflow-hidden">
      <motion.div
        variants={techStackVariants}
        initial="initial"
        animate="animate"
      >
        <Subtitle icon={Award} title="Tech Stack" />

        <InfiniteMovingCards direction="left" speed="slow" pauseOnHover>
          {technologies.map((item) => (
            <li key={item.name}>
              <Badge
                asChild
                variant="outline"
                style={{
                  borderColor: `${item.color}30`,
                  background: `linear-gradient(135deg, ${item.color}30, transparent, ${item.color}05)`,
                  boxShadow: `0 0 10px 0 ${item.color}30`,
                }}
                size="lg"
              >
                <a
                  href={item.target}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 h-full  gap-2"
                >
                  <item.icon />
                  {item.name}
                </a>
              </Badge>
            </li>
          ))}
        </InfiniteMovingCards>
      </motion.div>
    </div>
  )
}

export default ProfileStack
