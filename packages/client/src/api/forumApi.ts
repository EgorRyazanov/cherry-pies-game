import { END_POINTS_URL } from '../const/api'
import { axiosInstance } from './axiosInstance'
import { TForumListItem } from '../store/forum/state'
import {
  TForumDetails,
  TForumCreation,
  TAddCommentData,
} from '../pages/Forum/types'

export const forumApi = {
  getForumList() {
    return axiosInstance.get<TForumListItem[]>(END_POINTS_URL.GET_FORUM_TOPICS)
  },
  createTopic(data: TForumCreation) {
    return axiosInstance.post<{ status: string; ok: boolean }>(
      END_POINTS_URL.CREATE_FORUM_TOPIC,
      data
    )
  },
  getForumById(id: string) {
    return axiosInstance.get<TForumDetails>(
      `${END_POINTS_URL.GET_FORUM_BY_ID}/${id}`
    )
  },
  addComment(data: TAddCommentData) {
    return axiosInstance.post(END_POINTS_URL.ADD_COMMENT, data)
  },
  addReaction: async (comment_id: number, emoji: string, user_id: number) => {
    const response = await axiosInstance.post(
      `/comment/${comment_id}/reactions`,
      {
        emoji: '0x' + emoji,
        user_id,
      }
    )
    return response?.data
  },
  getReactionsByTopicId: async (comment_id: number) => {
    const response = await axiosInstance.get(`/comment/${comment_id}/reactions`)
    return response?.data
  },
}
