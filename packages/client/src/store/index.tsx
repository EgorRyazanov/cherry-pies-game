import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/slice'
import { forumsReducer } from './forum/slice'
import { leaderBoardReducer } from './leaderBoard/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    leaderBoard: leaderBoardReducer,
    forum: forumsReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
