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

export type TForumResponse = {
  id: string
  title: string
  description: string
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

export type TForumReactions = {
  reactions: TReaction[]
}

export type TForumDetails = TForum & {
  comments: TComment[]
}

export type TForumMessageCreation = {
  message: string
}

export type TAddCommentData = {
  topic_id: string
  comment: string
  user_id: number
}
