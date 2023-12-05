import { TComment } from '../../pages/Forum/types'
import styles from './index.module.scss'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import smile from '../../assets/smiley-plus.svg'
import { useState } from 'react'

type ForumEmojiProps = {
  comment: TComment
}

export const ForumEmoji = ({ comment }: ForumEmojiProps) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [reactions, setReactions] = useState<any>([])

  async function handleSelectEmoji(data: any) {
    setShowEmojiPicker(!showEmojiPicker)
    setReactions([...reactions, data.unified])
    console.log(comment)

    //await apiForum.addReaction(Number(comment.id), data.unified, comment.user.id!);
  }

  return (
    <div className={styles.reactions}>
      <div className={styles.reactionsContainer}>
        {reactions &&
          reactions.map((item: any, index: any) => (
            <div className={styles.emojiWrapper} key={index}>
              <span className={styles.emojiSpan}>
                {String.fromCodePoint(parseInt(item, 16))}
              </span>
              {/* <span className={styles.emojiCount}>{comment.likesCount}</span> */}
            </div>
          ))}
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
      {/*  <button
            onClick={() => handleLikeButtonClick(comment.id)}
            className={styles.commentLikeButton}>
            <Heart
              fill={comment.isLiked ? '#DC143C' : '#686868'}
              className={styles.likeButtonImage}
            />
            <span className={styles.likeButtonCount}>{comment.likesCount}</span>
          </button> */}
    </div>
  )
}
