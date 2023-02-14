import create, { StateCreator } from 'zustand'
const isClient = typeof window !== 'undefined'

const getLocalStorage = (key: string): any => {
  const val = isClient && window.localStorage.getItem(key)
  if (val) return JSON.parse(val)
  else return null
}

const setLocalStorage = (key: string, value: any) => {
  isClient && window.localStorage.setItem(key, JSON.stringify(value))
}

type State = {
  isLoading: boolean
  persistedStateItem: boolean
}

type Action = {
  setIsLoading: (isLoading: boolean) => void
  setPersistedStateItem: (persistedStateItem: boolean) => void
}

const stateCreator: StateCreator<State & Action> = (set) => ({
  isLoading: false,
  persistedStateItem: getLocalStorage('persistedStateItem') || false,
  setIsLoading: (isLoading) => {
    set({ isLoading })
  },
  setPersistedStateItem: (persistedStateItem) => {
    set({ persistedStateItem })
    setLocalStorage('persistedStateItem', persistedStateItem)
  },
})

const useStore = create<State & Action>(stateCreator)

export default useStore
