import { motion } from 'motion/react'
import { DownloadIcon } from 'lucide-react'
import CV from '/MEHMET_ILHAN.pdf'
import { CardBackground, CardContainer, CardItem } from '../ui/3d-card'
import BlurBg from '../blur-bg'
import HoverBorder from '../hover-border'
import { Button } from '../ui/button'
import type { Variants } from 'motion/react'

const profileActionsVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}
function ProfileActions() {
  return (
    <CardContainer className=" w-sm rotate-y-0">
      <BlurBg />
      <HoverBorder />
      <CardBackground showMeteors={false} />

      <CardItem translateZ={35} className="w-full">
        <ProfileActionsContent />
      </CardItem>
    </CardContainer>
  )
}

function ProfileActionsContent() {
  return (
    <div className="space-y-2 overflow-hidden">
      <motion.button
        variants={profileActionsVariants}
        initial="initial"
        animate="animate"
        className="flex justify-around w-full"
      >
        <Button variant="outline" size="lg" asChild>
          <a href={CV} download target="_blank">
            <DownloadIcon /> Download CV
          </a>
        </Button>
      </motion.button>
    </div>
  )
}

export default ProfileActions
