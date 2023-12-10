import { axiosInstance } from './axiosInstance'

export const forumApi = {
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
