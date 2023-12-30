import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TForumResponse } from '../../pages/Forum/types'
import { initialState, TForum, TForumListItem, TInitialState } from './state'
import {
  createTopicThunk,
  fetchReactions,
  getCommentsListThunk,
  getForumByIdThunk,
  getForumListThunk,
} from './dispatchers'

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    createForum(state: TInitialState, action: PayloadAction<TForumResponse>) {
      const { title, description, id } = action.payload

      state.forumList.push({ title, id })
      state.forumDataList.push({
        title,
        id,
        description,
        comments: [],
        image: '/src/assets/avatar.svg',
      })
    },
    addComment(state: TInitialState, action: PayloadAction<any>) {
      state.selectedForum.comments.push(action.payload)
    },
    addReaction(
      state: TInitialState,
      action: PayloadAction<{
        id: string
        comment_id: string
        emoji: string
        user_id: number
      }>
    ) {
      const { comment_id } = action.payload

      const existingComment = state.selectedForum.comments.find(
        comment => `${comment.id}` === comment_id
      )
      if (existingComment) {
        existingComment.reactions.push(action.payload)
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(getForumListThunk.pending, (state: TInitialState) => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(
      getForumListThunk.fulfilled,
      (state: TInitialState, action: PayloadAction<TForumListItem[]>) => {
        state.isLoading = false
        state.forumList = action.payload
      }
    )
    builder.addCase(getForumListThunk.rejected, (state: TInitialState) => {
      state.isError = true
      state.isLoading = false
    })
    builder.addCase(createTopicThunk.pending, (state: TInitialState) => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(createTopicThunk.fulfilled, (state: TInitialState) => {
      state.isLoading = false
    })
    builder.addCase(createTopicThunk.rejected, (state: TInitialState) => {
      state.isError = true
      state.isLoading = false
    })
    builder.addCase(getForumByIdThunk.pending, (state: TInitialState) => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(
      getForumByIdThunk.fulfilled,
      (state: TInitialState, action: PayloadAction<TForum>) => {
        state.isLoading = false
        state.selectedForum.description = action.payload.description
        state.selectedForum.id = action.payload.id
        state.selectedForum.title = action.payload.title
      }
    )
    builder.addCase(getCommentsListThunk.pending, (state: TInitialState) => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(
      getCommentsListThunk.fulfilled,
      (state: TInitialState, action: PayloadAction<any>) => {
        state.isLoading = false
        state.selectedForum.comments = action.payload
      }
    )
    builder.addCase(getCommentsListThunk.rejected, (state: TInitialState) => {
      state.isError = true
      state.isLoading = false
    })

    builder.addCase(
      fetchReactions.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (action.payload.data[0]) {
          const commentId = action.payload.data[0].comment_id
          const existingComment = state.selectedForum.comments.find(
            comment => `${comment.id}` === commentId
          )
          if (existingComment) {
            existingComment.reactions = action.payload.data
          }
        }
      }
    )
    builder.addCase(fetchReactions.rejected, () => {
      console.error('fetch reactions failed')
    })
  },
})

export const forumsReducer = forumSlice.reducer

export const { createForum, addComment, addReaction } = forumSlice.actions
