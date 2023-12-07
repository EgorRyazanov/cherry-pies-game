export type ReactionType = {
  topic_id: string
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
              topic_id: '',
              emoji: '',
              user_id: '',
            },
          ],
        },
      ],
    },
  ],
}
