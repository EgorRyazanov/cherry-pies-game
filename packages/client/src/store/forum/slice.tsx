import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './state'

const forumSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
  },
})

export const {} = forumSlice.actions
export default forumSlice.reducer
