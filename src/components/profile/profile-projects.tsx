import { motion } from 'motion/react'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { CardBackground, CardContainer, CardItem } from '../ui/3d-card'
import BlurBg from '../blur-bg'
import HoverBorder from '../hover-border'
import Subtitle from '../ui/subtitle'
import type { Variants } from 'motion/react'
import { projects } from '@/constants/projects.constants'

const profileProjectsVariants: Variants = {
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
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const projectItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
}

function ProfileProjects() {
  return (
    <CardContainer
      transitionField="profileProjects"
      className=" w-[90%] md:w-xl "
    >
      <BlurBg />
      <HoverBorder />
      <CardBackground showMeteors={false} />

      <CardItem translateZ={35} className="w-full">
        <ProfileProjectsContent />
      </CardItem>
    </CardContainer>
  )
}

function ProfileProjectsContent() {
  return (
    <div className="space-y-2 overflow-hidden">
      <motion.div
        variants={profileProjectsVariants}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        <Subtitle icon={FolderGit2} title="Projects" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {projects.map((project) => (
            <motion.li key={project.url} variants={projectItemVariants}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/project relative flex h-full flex-col gap-2 overflow-hidden rounded-xl border p-3 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: `${project.color}30`,
                  background: `linear-gradient(135deg, ${project.color}25, transparent 60%, ${project.color}08)`,
                  boxShadow: `0 0 12px 0 ${project.color}25`,
                }}
              >
                <span
                  className="pointer-events-none absolute -top-10 -right-10 size-24 rounded-full opacity-40 blur-2xl transition-opacity duration-300 group-hover/project:opacity-80"
                  style={{ background: project.color }}
                />

                <div className="relative flex items-center gap-2.5">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-lg border"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}40`,
                      background: `${project.color}15`,
                    }}
                  >
                    <project.icon className="size-4.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold tracking-tight text-foreground">
                      {project.name}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                      </span>
                      <span className="truncate">
                        {project.url.replace(/^https?:\/\//, '')}
                      </span>
                    </span>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5 group-hover/project:text-foreground" />
                </div>

                <p className="relative text-xs/relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.tags.length > 0 && (
                  <div className="relative mt-auto flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                        style={{
                          borderColor: `${project.color}30`,
                          background: `${project.color}10`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default ProfileProjects
