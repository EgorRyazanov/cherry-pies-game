import { Request, Response } from 'express'

import Topic from '../models/topic.model'
import xss from 'xss'

class TopicController {
  async createTopic(req: Request, res: Response) {
    try {
      const { title, text, likes_count, description } = req.body
      const newTopic = await Topic.create({
        title,
        text,
        likes_count,
        description,
      })

      const sanitizedTopic = {
        id: newTopic?.id,
        title: xss(newTopic?.title || ''),
        text: xss(newTopic?.text || ''),
        description: xss(newTopic?.description || ''),
        likes_count: newTopic?.likes_count,
      }
      res.json(sanitizedTopic)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  async getTopics(_req: Request, res: Response) {
    try {
      const topics = await Topic.findAll()

      const sanitizedTopics = topics.map(topic => ({
        id: topic.id,
        title: xss(topic?.title || ''),
        text: xss(topic?.text || ''),
        description: xss(topic?.description || ''),
        likes_count: topic?.likes_count,
      }))

      res.json(sanitizedTopics)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  async getOneTopic(req: Request, res: Response) {
    try {
      const id = req.params.id
      const topic = await Topic.findByPk(id)
      res.json(topic)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  // TODO: Дополнительно для недели доработок
  /*
  async updateTopic(req: Request, res: Response) {
    try {
      const { id, title, text } = req.body;
      const topic = await Topic.findByPk(id);

      if (!topic) {
        return res.status(404).json({ error: 'Топик не найден' });
      }

      topic.title = title;
      topic.text = text;

      await topic.save();
      res.json(topic);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
  }

  async deleteTopic(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const topic = await Topic.findByPk(id);

      if (!topic) {
        return res.status(404).json({ error: 'Топик не найден' });
      }
      await topic.destroy();
      res.json({ detail: `Пользователь удален ${xss(topic?.title || "")}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
  }
  */
}

export default new TopicController()
