import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './state'
import { fetchReactions } from './dispatchecrs'

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchReactions.fulfilled,
        (state, action: PayloadAction<any>) => {
          if (action.payload.data[0]) {
            const topic_id = action.payload.data[0].topic_id
            state.data.map(item => {
              const existingComment = item.comments.find(
                comment => `${comment.id}` === topic_id
              )
              if (existingComment) {
                existingComment.reactions = action.payload.data
              }
            })
          }
        }
      )
      .addCase(fetchReactions.rejected, () => {
        console.error('fetch reactions failed')
      })
  },
})

//export const {} = forumSlice.actions
export default forumSlice.reducer
