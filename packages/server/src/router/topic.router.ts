import { Router } from 'express'
import topicController from '../controller/topic.controller'

const router = Router()

router.post('/topic', topicController.createTopic)
router.get('/topic', topicController.getTopics)
router.get('/topic/:id', topicController.getOneTopic)
// router.put('/topic', topicController.updateTopic);
// router.delete('/topic/:id', topicController.deleteTopic);

export default router
