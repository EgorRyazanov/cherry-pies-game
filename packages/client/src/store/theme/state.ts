export type Theme = 'light' | 'dark'

const getTheme = (): Theme => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (['light', 'dark'].includes(theme)) return theme as Theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return 'light'

  return 'dark'
}

interface ThemeStore {
  theme: Theme
}

export const initialState: ThemeStore = {
  theme: getTheme(),
}
