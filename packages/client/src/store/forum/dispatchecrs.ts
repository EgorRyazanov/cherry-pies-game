import { createAsyncThunk } from '@reduxjs/toolkit'
import { forumApi } from '../../api/forumApi'
import { ReactionType } from './state'

export const fetchReactions = createAsyncThunk(
  'forum/reactionsByTopicId',
  async (topic_id: number, thunkAPI) => {
    try {
      const response = (await forumApi.getReactionsByTopicId(
        topic_id
      )) as ReactionType
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: (error as Error | null)?.message,
      })
    }
  }
)
