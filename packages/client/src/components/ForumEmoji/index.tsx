import { TComment } from '../../pages/Forum/types'
import styles from './index.module.scss'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import smile from '../../assets/smiley-plus.svg'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/hook'
import { getUserData } from '../../store/user/selectors'
import { forumApi } from '../../api/forumApi'
import { countDublicate } from '../../utils/duplicate'
import { fetchReactions } from '../../store/forum/dispatchers'

type ForumEmojiProps = {
  comment: TComment
}

export const ForumEmoji = ({ comment }: ForumEmojiProps) => {
  const dispatch = useAppDispatch()
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [reactions, setReactions] = useState<any>(comment.reactions)
  const { user } = useAppSelector(getUserData)

  async function handleSelectEmoji(data: any) {
    setShowEmojiPicker(!showEmojiPicker)
    setReactions([
      ...reactions,
      {
        comment_id: comment.id,
        emoji: data.unified,
        user_id: user.id,
      },
    ])
    await forumApi.addReaction(Number(comment.id), data.unified, user.id!)
    dispatch(fetchReactions(Number(comment.id)))
  }

  const arr = countDublicate(reactions)

  return (
    <div className={styles.reactions}>
      <div className={styles.reactionsContainer}>
        {comment &&
          arr.map((item: any, index: any) => {
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
