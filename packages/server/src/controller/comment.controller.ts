import { Request, Response } from 'express'

import Comment from '../models/comment.model'
import xss from 'xss'

class CommentController {
  async createComment(req: Request, res: Response) {
    try {
      const { title, comment, topic_id, likes_count } = req.body
      const newComment = await Comment.create({
        title,
        comment,
        topic_id,
        likes_count,
      })

      const sanitizedComment = {
        id: newComment?.id,
        topic_id: newComment?.topic_id,
        title: xss(newComment?.title || ''),
        comment: xss(newComment?.comment || ''),
        likes_count: newComment?.likes_count,
      }
      res.json(sanitizedComment)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  async getCommentByTopic(req: Request, res: Response) {
    try {
      const id = req.query.id
      const comments = await Comment.findAll({ where: { topic_id: id } })
      res.json(comments)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }
}

export default new CommentController()
