import { Router } from 'express'
import reactionController from '../controller/reaction.controller'

const router = Router()

router.post('/comment/:comment_id/reactions', reactionController.addReaction)
router.get('/comment/:comment_id/reactions', reactionController.getReactions)

export default router
