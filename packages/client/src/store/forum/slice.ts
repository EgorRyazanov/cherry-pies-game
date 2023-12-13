import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUserData } from '../../api/types'
import { TForumCreation } from '../../pages/Forum/types'
import { initialState, TForum, TForumListItem, TInitialState } from './state'
import {
  createTopicThunk,
  getForumByIdThunk,
  getForumListThunk,
} from './dispatchers'

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    createForum(state: TInitialState, action: PayloadAction<TForumCreation>) {
      const { title, description } = action.payload
      const id = String(state.forumList.length + 1)

      state.forumList.push({ title, id })
      state.forumDataList.push({
        title,
        id,
        description,
        comments: [],
        image: '/src/assets/avatar.svg',
      })
    },
    addComment(
      state: TInitialState,
      action: PayloadAction<{ id: string; comment: string; user: TUserData }>
    ) {
      const { id, comment, user } = action.payload

      const selectedForum = state.forumDataList[+id - 1]

      const commentId = String(selectedForum?.comments?.length + 1)

      const date = new Date().toLocaleString()

      const newComment = {
        id: commentId,
        date,
        reactions: [],
        text: comment,
        user,
      }

      state.forumDataList[+id - 1].comments.push(newComment)
      state.selectedForum?.comments?.push(newComment)
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
        state.selectedForum = action.payload
      }
    )
  },
})

export const forumsReducer = forumSlice.reducer

export const { addComment, createForum } = forumSlice.actions
