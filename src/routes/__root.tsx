import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../assets/css/index.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from '@/providers/theme.provider'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import TransitionState from '@/components/transition-state'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RenderApp({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="z-50  h-screen w-full flex gap-16  container mx-auto">
        <div className="absolute top-0 right-0 p-4 flex flex-col gap-2">
          <ThemeToggle />
          <TransitionState />
        </div>

        {/* <div className="w-64"></div> */}
        <div className="grow flex relative justify-center items-center">
          {children}
        </div>
      </div>
    </ThemeProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="h-screen flex flex-col">
        <RenderApp>{children}</RenderApp>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
