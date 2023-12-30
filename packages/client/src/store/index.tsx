import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/slice'

import { forumsReducer } from './forum/slice'
import { leaderBoardReducer } from './leaderBoard/slice'
import { themeReducer } from './theme/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    forum: forumsReducer,
    leaderBoard: leaderBoardReducer,
    theme: themeReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
