import { motion } from 'motion/react'
import { CardBackground, CardContainer, CardItem } from '../ui/3d-card'
import BlurBg from '../blur-bg'
import HoverBorder from '../hover-border'
import Subtitle from '../ui/subtitle'
import GithubIcon from '../icons/github'
import ComingSoon from '../ui/coming-soon'
import type { Variants } from 'motion/react'

const profileContributionsVariants: Variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}
function ProfileContributions() {
  return (
    <CardContainer transitionField="profileContributions" className="w-xl ">
      <BlurBg />
      <HoverBorder />
      <CardBackground showMeteors={false} />

      <CardItem translateZ={35} className="w-full">
        <ProfileContributionsContent />
      </CardItem>
    </CardContainer>
  )
}

function ProfileContributionsContent() {
  return (
    <div className="space-y-2 overflow-hidden">
      <motion.div
        variants={profileContributionsVariants}
        initial="initial"
        animate="animate"
      >
        <Subtitle icon={GithubIcon} title="Contributions" />
        <ComingSoon />
      </motion.div>
    </div>
  )
}

export default ProfileContributions
