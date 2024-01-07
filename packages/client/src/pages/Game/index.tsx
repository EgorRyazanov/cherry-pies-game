import React, { useRef } from 'react'
import Canvas from '../../components/Canvas/Canvas'
import useFullScreen from '../../hook/useFullScreen'
import dfs from '../../assets/dfs.svg'
import fs from '../../assets/fs.svg'

type TGamePage = {
  logoutCallback: () => void
}

const GamePage = ({ logoutCallback }: TGamePage) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isFullScreen, setIsFullScreen] = useFullScreen(
    ref.current || document.documentElement
  )

  return (
    <div ref={ref}>
      <Canvas />
      <button onClick={logoutCallback}>Logout</button>
      <button onClick={setIsFullScreen}>
        {isFullScreen ? (
          <img src={dfs} alt="disable full screen" height={20} width={20} />
        ) : (
          <img src={fs} alt="set full screen" height={20} width={20} />
        )}
      </button>
    </div>
  )
}

export default GamePage
