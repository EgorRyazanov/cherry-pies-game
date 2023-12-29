import { Request, Response } from 'express'
import Reaction from '../models/reaction.model'
import xss from 'xss'

class ReactionController {
  // Метод для добавления реакции
  public async addReaction(req: Request, res: Response) {
    try {
      const { comment_id } = req.params
      const { emoji, user_id } = req.body

      if (!emoji || !user_id) {
        res.status(400).json({ message: 'Emoji and User ID are required' })
      }

      const reaction = await Reaction.create({
        comment_id,
        emoji,
        user_id,
      })

      const sanitizedReaction = {
        id: reaction?.id,
        comment_id: reaction?.comment_id,
        emoji: xss(reaction?.emoji || ''),
        user_id: reaction?.user_id,
      }

      res.json(sanitizedReaction)
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        error: (error as Error).message,
      })
    }
  }

  // Метод для получения всех реакций на топик
  public async getReactions(req: Request, res: Response): Promise<Response> {
    try {
      const { comment_id } = req.params

      const reactions = await Reaction.findAll({ where: { comment_id } })

      return res.status(200).json({ data: reactions })
    } catch (error) {
      return res.status(500).json({
        message: 'Internal Server Error',
        error: (error as Error).message,
      })
    }
  }
}

export default new ReactionController()
