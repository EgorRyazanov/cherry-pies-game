import { Router } from 'express'
import commentController from '../controller/comment.controller'

const router = Router()

router.post('/comment', commentController.createComment)
router.get('/comment', commentController.getCommentByTopic)

export default router
