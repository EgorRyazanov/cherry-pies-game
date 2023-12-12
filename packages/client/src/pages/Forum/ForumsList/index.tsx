import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
//
import { getForumPageData } from '../../../store/forum/selectors'
import { useAppDispatch, useAppSelector } from '../../../hook/hook'
import { getForumListThunk } from '../../../store/forum/dispatchers'
import { FormLinkButton } from '../../../components/FormAsLinkButton'

import styles from './index.module.scss'

export const ForumPage = () => {
  const dispatch = useAppDispatch()
  const { forumList } = useAppSelector(getForumPageData)

  useEffect(() => {
    if (!forumList.length) {
      dispatch(getForumListThunk())
    }
  }, [dispatch])

  const forumsToRender = forumList.map(mockForum => (
    <li key={mockForum.id}>
      <Link className={`${styles.forum} ${styles.font_32}`} to={mockForum.id}>
        {mockForum.title}
      </Link>
    </li>
  ))

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.font_40} ${styles.forumTitle}`}>Форумы</h1>
      <ul className={styles.forumsContainer}>{forumsToRender}</ul>
      <FormLinkButton
        to="create"
        buttonText="Создать тему"
        className={styles.forumCreate}
      />
    </div>
  )
}
