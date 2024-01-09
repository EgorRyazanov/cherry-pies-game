import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hook/hook'
import { getTheme } from '../../store/theme/selectors'
import { setTheme } from '../../store/theme/slice'
import moonSrc from '../../assets/moon.svg'
import sunSrc from '../../assets/sun.svg'
import styles from './index.module.scss'

export const ThemeChanger = () => {
  const theme = useAppSelector(getTheme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(next))
  }

  return (
    <div>
      <button className={`button ${styles.button}`} onClick={handleChange}>
        <img
          src={theme === 'dark' ? moonSrc : sunSrc}
          className={styles.iconImage}
        />
      </button>
    </div>
  )
}
