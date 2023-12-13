export type ReactionType = {
  id: number
  comment_id: string
  emoji: string
  user_id: string
}

export const initialState = {
  data: [
    {
      id: '',
      title: '',
      description: '',
      image: '',
      comments: [
        {
          id: '',
          text: '',
          date: '',
          user: {},
          reactions: [
            {
              id: null,
              comment_id: '',
              emoji: '',
              user_id: '',
            },
          ],
        },
      ],
    },
  ],
}
