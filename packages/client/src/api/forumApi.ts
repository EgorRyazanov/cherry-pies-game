import { END_POINTS_URL } from '../const/api'
import { axiosInstance } from './axiosInstance'
import { TForumListItem } from '../store/forum/state'
import {
  TForumDetails,
  TForumCreation,
  TAddCommentData,
  TReaction,
  TForum,
} from '../pages/Forum/types'

export const forumApi = {
  getForumList() {
    return axiosInstance.get<TForumListItem[]>(END_POINTS_URL.GET_FORUM_TOPICS)
  },
  createTopic(data: TForumCreation) {
    return axiosInstance.post<TForum>(END_POINTS_URL.CREATE_FORUM_TOPIC, data)
  },
  getForumById(id: string) {
    return axiosInstance.get<TForumDetails>(
      `${END_POINTS_URL.GET_FORUM_BY_ID}/${id}`
    )
  },
  addComment(data: TAddCommentData) {
    return axiosInstance.post(END_POINTS_URL.ADD_COMMENT, data)
  },
  getCommentsById(id: string) {
    return axiosInstance.get<TForumDetails>(
      `${END_POINTS_URL.GET_COMMENT_BY_ID}/${id}`
    )
  },
  addReaction(data: TReaction) {
    const { comment_id, emoji, user_id } = data
    return axiosInstance.post(
      `${END_POINTS_URL.ADD_REACTION}/${comment_id}/reactions`,
      {
        emoji: '0x' + emoji,
        user_id,
      }
    )
  },
  getReactionsByCommentId(comment_id: string) {
    return axiosInstance.get(
      `${END_POINTS_URL.ADD_REACTION}/${comment_id}/reactions`
    )
  },
  getUserById(id: number) {
    return axiosInstance.get(`${END_POINTS_URL.GET_USER_BY_ID}${id}`)
  },
}
