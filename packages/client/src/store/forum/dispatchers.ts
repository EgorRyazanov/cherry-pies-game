import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { createForum } from './slice'
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
    .then(() => {
      dispatch(createForum(data))
    })
    .catch(error => rejectWithValue(error))
})

export const getForumByIdThunk = createAsyncThunk<
  TForum,
  string,
  { state: RootState; rejectValue: string }
>('forum/getForumByIdThunk', (id, { getState, rejectWithValue }) => {
  return forumApi
    .getForumById(id)
    .then(() => {
      // временное решение, т.к. не готова API форумов, решение делать на моковых серверах согласовано с ментором
      // после ввода в строй нашего сервера, будут удалены следующие две строки и раскомментирована последняя строка
      const forums = getState().forum.forumDataList
      return forums.filter(forum => forum.id === id)[0]
      // response response.data;
    })
    .catch(error => rejectWithValue(error))
})

export const addCommentThunk = createAsyncThunk<
  void,
  TAddCommentData,
  { rejectValue: string }
>('forum/addCommentThunk', (data, { rejectWithValue }) => {
  return forumApi
    .addComment(data)
    .then(response => console.log(response.data))
    .catch(error => rejectWithValue(error))
})

export const fetchReactions = createAsyncThunk(
  'forum/reactionsByTopicId',
  async (topic_id: number, thunkAPI) => {
    try {
      const response = (await forumApi.getReactionsByTopicId(
        topic_id
      )) as TReaction
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: (error as Error | null)?.message,
      })
    }
  }
)
