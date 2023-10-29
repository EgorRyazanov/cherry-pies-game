import React, { FC, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { authApi } from './api/authApi'
import { ROUTES_NAMES } from './const/routeNames'
import './App.scss'
import LoginPage from './pages/Login'
import RegistrationPage from './pages/RegistrationPage'
import UserProfilePage from './pages/UserProfile'
import MainPage from './pages/Main'
import GamePage from './pages/Game'
import ForumPage from './pages/Forum'
import Error404 from './pages/Error_404'
import Error5XX from './pages/Error_5XX'
import LeaderBoardPage from './pages/LeaderBoard'
import { BaseComponent } from './components/Base'
import { ErrorBoundary } from './hoc/ErrorBoundary'
import { useAppDispatch } from './hook/hook'
import { getUser } from './store/user/slice'

const App: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const path = useLocation().pathname

  useEffect(() => {
    if (
      !(
        path === ROUTES_NAMES.SIGNUP ||
        path === ROUTES_NAMES.SIGN_IN ||
        path === ROUTES_NAMES.SETTINGS
      )
    ) {
      try {
        dispatch(getUser())
      } catch (error) {
        console.log(error)
        navigate(ROUTES_NAMES.SIGN_IN)
      }
    }
  }, [dispatch, path])

  const logoutHandler = () => {
    authApi
      .logout()
      .then(response => {
        console.log(response)
        navigate(ROUTES_NAMES.SIGN_IN)
      })
      .catch(error => {
        console.log(error)
        navigate(ROUTES_NAMES.SIGN_IN)
      })
  }

  // useEffect(() => {
  //   const fetchServerData = async () => {
  //     const url = `http://localhost:${__SERVER_PORT__}`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //
  //   fetchServerData()
  // }, [])

  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<BaseComponent />}>
          <Route
            path={ROUTES_NAMES.LEADER_BOARD}
            element={<LeaderBoardPage />}
          />
          <Route
            path={ROUTES_NAMES.FORUM}
            element={<ForumPage logoutCallback={logoutHandler} />}
          />
          <Route
            path={ROUTES_NAMES.SETTINGS}
            element={<UserProfilePage logoutCallback={logoutHandler} />}
          />
        </Route>
        <Route
          path={ROUTES_NAMES.MAIN}
          element={<MainPage logoutCallback={logoutHandler} />}
        />
        <Route path={ROUTES_NAMES.SIGN_IN} element={<LoginPage />} />
        <Route path={ROUTES_NAMES.SIGNUP} element={<RegistrationPage />} />
        <Route
          path={ROUTES_NAMES.GAME}
          element={<GamePage logoutCallback={logoutHandler} />}
        />
        <Route path={ROUTES_NAMES.ERROR_5XX} element={<Error5XX />} />
        <Route path={ROUTES_NAMES.ERROR_404} element={<Error404 />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
