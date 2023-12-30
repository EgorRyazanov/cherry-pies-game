import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { addComment, addReaction, createForum } from './slice'
import { forumApi } from '../../api/forumApi'
import { TForum, TForumListItem, TReaction } from './state'
import { TAddCommentData, TForumCreation } from '../../pages/Forum/types'

export const getForumListThunk = createAsyncThunk<
  TForumListItem[],
  void,
  { rejectValue: string }
>('forum/getForumLitThunk', (_, { rejectWithValue }) => {
  return forumApi
    .getForumList()
    .then(response => response.data)
    .catch(error => rejectWithValue(error))
})

export const createTopicThunk = createAsyncThunk<
  void,
  TForumCreation,
  { rejectValue: string }
>('forum/createTopicThunk', (data, { dispatch, rejectWithValue }) => {
  return forumApi
    .createTopic(data)
    .then(response => response.data)
    .then(res => {
      dispatch(createForum(res))
    })
    .catch(error => rejectWithValue(error))
})

export const getForumByIdThunk = createAsyncThunk<
  TForum,
  string,
  { state: RootState; rejectValue: string }
>('forum/getForumByIdThunk', (id, { rejectWithValue }) => {
  return forumApi
    .getForumById(id)
    .then(response => response.data)
    .catch(error => rejectWithValue(error))
})

export const addCommentThunk = createAsyncThunk<
  void,
  TAddCommentData,
  { rejectValue: string }
>('forum/addCommentThunk', (data, { dispatch, rejectWithValue }) => {
  return forumApi
    .addComment(data)
    .then(response => response.data)
    .then(res => {
      dispatch(addComment(res))
    })
    .catch(error => rejectWithValue(error))
})

export const getCommentsListThunk = createAsyncThunk(
  'forum/getCommentsListThunk',
  (id: string, { rejectWithValue }) => {
    return forumApi
      .getCommentsById(id)
      .then(response => response.data)
      .catch(error => rejectWithValue(error))
  }
)

export const addReactionThunk = createAsyncThunk(
  'forum/addReactionThunk',
  (data: TReaction, { dispatch, rejectWithValue }) => {
    return forumApi
      .addReaction(data)
      .then(response => response.data)
      .then(res => {
        dispatch(addReaction(res))
      })
      .catch(error => rejectWithValue(error))
  }
)

export const fetchReactions = createAsyncThunk(
  'forum/reactionsByTopicId',
  (comment_id: string, { rejectWithValue }) => {
    return forumApi
      .getReactionsByCommentId(comment_id)
      .then(response => response.data)
      .catch(error => rejectWithValue(error))
  }
)
