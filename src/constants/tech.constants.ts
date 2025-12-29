import type React from 'react'
import TanstackIcon from '@/components/icons/tanstack'
import RedisIcon from '@/components/icons/redis'
import GithubIcon from '@/components/icons/github'
import ReactIcon from '@/components/icons/react'
import VueIcon from '@/components/icons/vue'
import NestIcon from '@/components/icons/nest'
import PostgresIcon from '@/components/icons/postgres'
import MongoIcon from '@/components/icons/mongo'
import FastifyIcon from '@/components/icons/fastify'
import ExpressIcon from '@/components/icons/express'
import NodeIcon from '@/components/icons/node'
import NuxtIcon from '@/components/icons/nuxt'
import AwsIcon from '@/components/icons/aws'
import DockerIcon from '@/components/icons/docker'
import GraphqlIcon from '@/components/icons/graphql'
import TailwindIcon from '@/components/icons/tailwind'

export const technologies: Array<{
  icon: React.ComponentType
  name: string
  color: string
  target: string
}> = [
  {
    icon: TailwindIcon,
    name: 'Tailwind',
    color: '#38bdf8',
    target: 'https://tailwindcss.com',
  },
  {
    icon: ReactIcon,
    name: 'React',
    color: '#61DAFB',
    target: 'https://react.dev',
  },
  {
    icon: VueIcon,
    name: 'Vue',
    color: '#4FC08D',
    target: 'https://vuejs.org',
  },
  {
    name: 'Tanstack',
    color: '#FA9E67',
    icon: TanstackIcon,
    target: 'https://tanstack.com',
  },
  {
    name: 'Nuxt',
    color: '#00e676',
    icon: NuxtIcon,
    target: 'https://nuxt.com',
  },
  {
    name: 'Node.js',
    color: '#8bc34a',
    icon: NodeIcon,
    target: 'https://nodejs.org',
  },
  {
    icon: NestIcon,
    name: 'NestJS',
    color: '#E0234E',
    target: 'https://nestjs.com',
  },
  {
    icon: FastifyIcon,
    name: 'Fastify',
    color: '#000000',
    target: 'https://fastify.dev',
  },
  {
    name: 'Express',
    color: '#000000',
    icon: ExpressIcon,
    target: 'https://expressjs.com',
  },
  {
    name: 'GraphQL',
    color: '#ec407a',
    icon: GraphqlIcon,
    target: 'https://graphql.org',
  },
  {
    name: 'Redis',
    color: '#7a0c00',
    icon: RedisIcon,
    target: 'https://redis.io',
  },
  {
    icon: PostgresIcon,
    name: 'PostgreSQL',
    color: '#4169E1',
    target: 'https://www.postgresql.org',
  },
  {
    icon: MongoIcon,
    name: 'MongoDB',
    color: '#47A248',
    target: 'https://www.mongodb.com',
  },
  {
    name: 'AWS',
    color: '#232B37',
    icon: AwsIcon,
    target: 'https://aws.amazon.com',
  },
  {
    name: 'GitHub',
    color: '#000000',
    icon: GithubIcon,
    target: 'https://github.com',
  },
  {
    name: 'Docker',
    color: '#0288d1',
    icon: DockerIcon,
    target: 'https://www.docker.com',
  },
]
