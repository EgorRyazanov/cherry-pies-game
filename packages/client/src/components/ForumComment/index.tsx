import { TComment } from '../../pages/Forum/types'
import { convertISOtoTimeDateMonth } from '../../utils/dateConvertors'
import styles from './index.module.scss'
import { Avatar } from '../Avatar'
import { ForumEmoji } from '../ForumEmoji'
import { TUserData } from '../../api/types'
import { useEffect, useState } from 'react'
import { forumApi } from '../../api/forumApi'

type ForumCommentProps = {
  comment: TComment
}

export const ForumComment = ({ comment }: ForumCommentProps) => {
  const [user, setUser] = useState<null | TUserData>(null)

  useEffect(() => {
    forumApi.getUserById(Number(comment.user_id)).then(res => setUser(res.data))
  }, [])

  return (
    <div className={styles.comment}>
      <div className={styles.commentAvatarContainer}>
        <Avatar imageUrl={user ? user.avatar : null} />
      </div>
      <div className={styles.commentTextContainer}>
        <p className={`${styles.commentUsername} ${styles.font_16_500}`}>
          {user?.display_name}
        </p>
        <p className={`${styles.commentText} ${styles.font_16_500}`}>
          {comment.comment}
        </p>
        <div className={styles.commentActions}>
          <div>
            <ForumEmoji comment={comment} />
          </div>
          <span className={`${styles.font_13} ${styles.commentDate}`}>
            {convertISOtoTimeDateMonth(comment?.createdAt)}
          </span>
        </div>
      </div>
    </div>
  )
}
