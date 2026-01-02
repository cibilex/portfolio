import { create } from 'zustand'

type TransitionType = {
  x: number
  y: number
}

export type TransitionFields =
  | 'profileHeader'
  | 'profileStack'
  | 'profileContributions'
  | 'profileActions'
type TransitionStoreState = Record<TransitionFields, TransitionType> & {
  modified: boolean
}

type TransitionStoreActions = {
  actions: {
    setTransition: (field: TransitionFields, data: TransitionType) => void
    resetState: () => void
  }
}

export const defaultTransitions: TransitionStoreState = {
  profileHeader: { x: 15, y: -5 },
  profileStack: { x: 0, y: 0 },
  profileContributions: { x: -5, y: -15 },
  profileActions: { x: 0, y: 0 },
  modified: false,
} as const

const useTransitionStore = create<
  TransitionStoreState & TransitionStoreActions
>()((set) => ({
  ...defaultTransitions,

  actions: {
    setTransition: (field, data) => set({ [field]: data, modified: true }),
    resetState: () =>
      set({
        ...defaultTransitions,
      }),
  },
}))

export const useTransitionState = (field: TransitionFields) =>
  useTransitionStore((state) => state[field])
export const useTransitionModified = () =>
  useTransitionStore((state) => state.modified)

export const useTransitionActions = () =>
  useTransitionStore((state) => state.actions)
