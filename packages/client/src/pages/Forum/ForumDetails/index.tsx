import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar } from '../../../components/Avatar'
import { getUserData } from '../../../store/user/selectors'
import { ForumComment } from '../../../components/ForumComment'
import { TForumMessageCreation } from '../types'
import { getForumPageData } from '../../../store/forum/selectors'
import { useAppDispatch, useAppSelector } from '../../../hook/hook'
import { ForumMessageForm } from '../../../components/ForumMessageForm'

import styles from './index.module.scss'
import {
  addCommentThunk,
  getCommentsListThunk,
  getForumByIdThunk,
} from '../../../store/forum/dispatchers'

export const ForumDetails = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(getUserData)
  const { selectedForum } = useAppSelector(getForumPageData)

  const { id } = useParams()

  const handleSubmit = (forumMessageCreation: TForumMessageCreation) => {
    const comment = forumMessageCreation.message.trim()

    if (comment.length && id) {
      dispatch(
        addCommentThunk({ topic_id: id, comment: comment, user_id: user.id })
      )
      dispatch(getForumByIdThunk(id))
      dispatch(getCommentsListThunk(id))
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(getForumByIdThunk(id))
      dispatch(getCommentsListThunk(id))
    }
  }, [id])

  if (!selectedForum) {
    return (
      <h2 className={`${styles.font_32} ${styles.notFoundTitle}`}>
        Форум не найден
      </h2>
    )
  }

  return (
    <>
      <div className={styles.forum}>
        <Avatar imageUrl={null} size={60} />
        <div className={styles.forumText}>
          <h2 className={styles.font_20}>{selectedForum.title}</h2>
          <h3 className={styles.font_16_500}>{selectedForum.description}</h3>
        </div>
      </div>
      <div className={styles.commentsContainer}>
        <h4 className={`${styles.commentsDescription} ${styles.font_24}`}>
          Комментарии:
        </h4>
        <div className={styles.commentsWrapper}>
          {selectedForum.comments &&
            selectedForum.comments.map(comment => (
              <ForumComment key={comment.id} comment={comment} />
            ))}
        </div>
        <ForumMessageForm handleSubmit={handleSubmit} />
      </div>
    </>
  )
}
