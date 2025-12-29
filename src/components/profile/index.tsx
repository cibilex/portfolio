import { motion } from 'framer-motion'

import BlurBg from '../blur-bg'
import HoverBorder from '../hover-border'
import { Button } from '../ui/button'
import ProfileHeader from './profile-header'
import ProfileStack from './profile-stack'
import {
  CardBackground,
  CardContainer,
  CardItem,
} from '@/components/ui/3d-card'

function Profile() {
  return (
    <div className="flex flex-col gap-20 pt-12">
      <ProfileHeader />
      <ProfileStack />

      <CardContainer className="w-xl rotate-y-">
        <BlurBg className="blur-xl" />
        <HoverBorder />
        <CardBackground showMeteors={false} />
        <a
          href="https://github.com/birobirobiro?utm_source=portfolio&amp;utm_medium=link&amp;utm_campaign=github-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          activity
        </a>
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

export default Profile
