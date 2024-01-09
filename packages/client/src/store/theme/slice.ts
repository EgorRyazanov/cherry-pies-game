import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Theme, initialState } from './state'

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions

export const themeReducer = themeSlice.reducer
