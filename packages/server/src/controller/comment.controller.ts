import { Request, Response } from 'express'

import Comment from '../models/comment.model'
import xss from 'xss'

class CommentController {
  async createComment(req: Request, res: Response) {
    try {
      const { topic_id, comment, user_id } = req.body
      const newComment = await Comment.create({
        topic_id,
        comment,
        user_id,
      })

      const sanitizedComment = {
        id: newComment?.id,
        topic_id: newComment?.topic_id,
        user_id: newComment?.user_id,
        title: xss(newComment?.title || ''),
        comment: xss(newComment?.comment || ''),
        likes_count: newComment?.likes_count,
        reactions: newComment?.reactions,
        createdAt: newComment?.createdAt,
        updatedAt: newComment?.updatedAt,
      }
      res.json(sanitizedComment)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  async getCommentByTopic(req: Request, res: Response) {
    try {
      const { id } = req.params
      const comments = await Comment.findAll({ where: { topic_id: id } })
      res.json(comments)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }
}

export default new CommentController()
