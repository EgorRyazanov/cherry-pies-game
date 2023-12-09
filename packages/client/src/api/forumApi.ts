import { axiosInstance } from './axiosInstance'

export const forumApi = {
  addReaction: async (topic_id: number, emoji: string, user_id: number) => {
    const response = await axiosInstance.post(
      `/comment/${topic_id}/reactions`,
      {
        topic_id,
        emoji: '0x' + emoji,
        user_id,
      }
    )
    return response?.data
  },
  getReactionsByTopicId: async (topic_id: number) => {
    const response = await axiosInstance.get(`/comment/${topic_id}/reactions`)
    return response?.data
  },
}
