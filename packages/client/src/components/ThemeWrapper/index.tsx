import { ReactNode, useEffect } from 'react'

import { useAppSelector } from '../../hook/hook'
import { getTheme } from '../../store/theme/selectors'

interface ThemeWrapperProps {
  children: ReactNode
}

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useAppSelector(getTheme)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return <div>{children}</div>
}
