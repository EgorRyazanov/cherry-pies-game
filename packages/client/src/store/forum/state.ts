export type TForumListItem = {
  id: string
  title: string
}

export type TReaction = {
  comment_id: string
  emoji: string
  user_id: number
}

export type TComment = {
  id: string
  title: string
  comment: string
  user_id: string
  topic_id: string
  likes_count: string
  reactions: TReaction[]
  createdAt: string
}

export type TForum = {
  id: string
  title: string
  description: string
  image: string
  comments: TComment[]
}

export type TInitialState = {
  isError: boolean
  isLoading: boolean
  newForumTitle: string
  newForumDescription: string
  newComment: string
  forumList: TForumListItem[]
  selectedForum: TForum
  forumDataList: TForum[]
}

export const initialState: TInitialState = {
  isError: false,
  isLoading: false,
  newForumTitle: '',
  newForumDescription: '',
  newComment: '',
  forumList: [],
  forumDataList: [],
  selectedForum: {
    id: '',
    title: '',
    description: '',
    image: '',
    comments: [],
  },
}
