import { TForumDetails } from './types'

export const MOCK_FORUMS = [
  {
    id: '1',
    title: 'Новые игры',
  },
  {
    id: '2',
    title: 'Старые игры',
  },
]

export const MOCK_FORUMS_DETAILS: TForumDetails[] = [
  {
    id: '1',
    title: 'Новые игры',
    description: 'Описание',
    image: '/src/assets/avatar.svg',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed officia veniam. Voluptatibus a temporibus corrupti expedita delectus! Repellat optio recusandae quia nobis iste, sint consectetur sequi corporis est et.',
        date: '2023-10-26T08:26:16Z',
        user: {
          id: 1,
          first_name: 'Егор',
          second_name: 'Рязанов',
          display_name: 'Егор',
          phone: '79222222222',
          login: 'blabla',
          avatar: null,
          email: 'test@gmail.com',
        },
        reactions: [
          {
            comment_id: '11',
            emoji: '1f600',
            user_id: 4546456,
          },
          {
            comment_id: '11',
            emoji: '1f600',
            user_id: 4546456,
          },
          {
            comment_id: '11',
            emoji: '1f600',
            user_id: 4546456,
          },
          {
            comment_id: '11',
            emoji: '1f600',
            user_id: 4546456,
          },
          {
            comment_id: '11',
            emoji: '1f600',
            user_id: 4546457,
          },
          {
            comment_id: '11',
            emoji: '1f601',
            user_id: 4546456,
          },
          {
            comment_id: '11',
            emoji: '1f601',
            user_id: 4546456,
          },
        ],
      },
      {
        id: '2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed officia veniam. Voluptatibus a temporibus corrupti expedita delectus! Repellat optio recusandae quia nobis iste, sint consectetur sequi corporis est et.',
        date: '2023-10-26T08:26:16Z',
        user: {
          id: 1,
          first_name: 'Егор',
          second_name: 'Рязанов',
          display_name: 'Егор',
          phone: '79222222222',
          login: 'blabla',
          avatar: null,
          email: 'test@gmail.com',
        },
        reactions: [
          {
            comment_id: '12',
            emoji: '1f601',
            user_id: 4546456,
          },
        ],
      },
      {
        id: '3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed officia veniam. Voluptatibus a temporibus corrupti expedita delectus! Repellat optio recusandae quia nobis iste, sint consectetur sequi corporis est et.',
        date: '2023-10-26T08:26:16Z',
        user: {
          id: 1,
          first_name: 'Егор',
          second_name: 'Рязанов',
          display_name: 'Егор',
          phone: '79222222222',
          login: 'blabla',
          avatar: null,
          email: 'test@gmail.com',
        },
        reactions: [
          {
            comment_id: '11',
            emoji: '1f618',
            user_id: 4546456,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Старые игры',
    description: 'Описание',
    image: '/src/assets/avatar.svg',
    comments: [
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed officia veniam. Voluptatibus a temporibus corrupti expedita delectus! Repellat optio recusandae quia nobis iste, sint consectetur sequi corporis est et.',
        date: '2023-10-26T10:25:31+0000',
        user: {
          id: 1,
          first_name: 'Егор',
          second_name: 'Рязанов',
          display_name: 'Егор',
          phone: '79222222222',
          login: 'blabla',
          avatar: null,
          email: 'test@gmail.com',
        },
        reactions: [
          {
            comment_id: '11',
            emoji: '1f917',
            user_id: 4546456,
          },
        ],
      },
    ],
  },
]
