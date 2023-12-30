import React, { useRef } from 'react'

import Canvas from '../../components/Canvas/Canvas'
import useFullScreen from '../../hook/useFullScreen'
import styles from './index.module.scss'

type TGamePage = {
  logoutCallback: () => void
}

const GamePage = ({ logoutCallback }: TGamePage) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isFullScreen, setIsFullScreen] = useFullScreen(
    ref.current || document.documentElement
  )

  return (
    <div className={styles.container} ref={ref}>
      <Canvas />
      <button onClick={logoutCallback}>Logout</button>
      <button onClick={setIsFullScreen}>
        {isFullScreen ? (
          <img
            src="./src/assets/dfs.svg"
            alt="disable full screen"
            height={20}
            width={20}
          />
        ) : (
          <img
            src="./src/assets/fs.svg"
            alt="set full screen"
            height={20}
            width={20}
          />
        )}
      </button>
    </div>
  )
}

export default GamePage
