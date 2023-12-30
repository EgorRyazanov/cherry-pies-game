import { TComment, TReaction } from '../../pages/Forum/types'
import styles from './index.module.scss'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import smile from '../../assets/smiley-plus.svg'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/hook'
import { getUserData } from '../../store/user/selectors'
import { addReactionThunk, fetchReactions } from '../../store/forum/dispatchers'

type ForumEmojiProps = {
  comment: TComment
}

export const ForumEmoji = ({ comment }: ForumEmojiProps) => {
  const dispatch = useAppDispatch()
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const { user } = useAppSelector(getUserData)

  function handleSelectEmoji(data: any) {
    setShowEmojiPicker(!showEmojiPicker)

    const dataReaction: TReaction = {
      comment_id: comment.id,
      emoji: data.unified,
      user_id: user.id,
    }

    dispatch(addReactionThunk(dataReaction))
    dispatch(fetchReactions(comment.id))
  }

  useEffect(() => {
    if (comment) {
      dispatch(fetchReactions(comment.id))
    }
  }, [])

  return (
    <div className={styles.reactions}>
      <div className={styles.reactionsContainer}>
        {comment.reactions &&
          comment.reactions.map((item: any, index: any) => {
            return (
              <div className={styles.emojiWrapper} key={index}>
                <span className={styles.emojiSpan}>
                  {String.fromCodePoint(parseInt(item.emoji, 16))}
                </span>
                {item.count > 1 ? (
                  <span className={styles.emojiCount}>{item.count}</span>
                ) : null}
              </div>
            )
          })}
      </div>
      <div className={styles.pickerContainer}>
        <img
          src={smile}
          alt="smile icon"
          className={styles.pickerImage}
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        />
        <div className={styles.emojiPicker}>
          {showEmojiPicker && (
            <Picker data={data} onEmojiSelect={handleSelectEmoji} />
          )}
        </div>
      </div>
    </div>
  )
}
