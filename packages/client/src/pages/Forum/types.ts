import { TUserData } from '../../api/types'

export type TForum = {
  id: string
  title: string
  description: string
  image: string
}

export type TReaction = {
  comment_id: string
  emoji: string
  user_id: number
}

export type TForumCreation = {
  title: string
  description: string
}

export type TComment = {
  id: string
  text: string
  date: string
  user: TUserData
  reactions: TReaction[]
}

export type TForumReactions = {
  reactions: TReaction[]
}

export type TForumDetails = TForum & {
  comments: TComment[]
}

export type TForumMessageCreation = {
  message: string
}

export type TAddCommentData = { forumId: string; data: TForumMessageCreation }
