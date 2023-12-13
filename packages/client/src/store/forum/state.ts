import { TUserData } from '../../api/types'
import { MOCK_FORUMS_DETAILS } from '../../pages/Forum/mockForums'

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
  text: string
  date: string
  user: TUserData
  reactions: TReaction[]
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
  selectedForum: TForum | null
  forumDataList: TForum[]
}

export const initialState: TInitialState = {
  isError: false,
  isLoading: false,
  newForumTitle: '',
  newForumDescription: '',
  newComment: '',
  forumList: [],
  forumDataList: MOCK_FORUMS_DETAILS,
  selectedForum: null,
}
