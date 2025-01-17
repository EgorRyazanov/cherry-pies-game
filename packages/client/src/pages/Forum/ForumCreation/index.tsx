import { Formik, Form } from 'formik'
import { useState } from 'react'
import { TForumCreation } from '../types'
import { validate } from '../../../utils/validator'
import { useAppDispatch } from '../../../hook/hook'
import { ROUTES_NAMES } from '../../../const/routeNames'
import { FormInput } from '../../../components/FormInput'
import { createTopicThunk } from '../../../store/forum/dispatchers'
import { MyErrorMessage } from '../../../components/MyErrorMessage'
import { FormLinkButton } from '../../../components/FormAsLinkButton'
import { FormSubmitButton } from '../../../components/FormSubmitButton'

import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

export const ForumCreation = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (
    forumCreation: TForumCreation,
    { resetForm }: { resetForm: () => void }
  ) => {
    dispatch(createTopicThunk(forumCreation))
    resetForm()
    navigate(-1)
  }

  const cleanFetchErrorHandler = () => {
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ title: '', description: '' }}
        validate={validate}
        onSubmit={handleSubmit}>
        <Form onChange={cleanFetchErrorHandler} className={styles.forumForm}>
          <div className={styles.forumCard}>
            <h2 className={`${styles.forumTitle} ${styles.font_32}`}>
              Создание темы для обсуждения
            </h2>
            <FormInput
              id="title"
              name="title"
              labelText="Введите название темы"
              className={styles.forumControlContainer}
              inputClassName={styles.forumControl}
            />
            <FormInput
              id="description"
              name="description"
              labelText="Описание"
              as="textarea"
              className={styles.forumControlContainer}
              inputClassName={`${styles.forumControl} ${styles.forumTextarea}`}
            />
            {errorMessage ? <MyErrorMessage message={errorMessage} /> : null}
          </div>
          <div className={styles.forumActions}>
            <FormSubmitButton
              disabled={false}
              buttonType="submit"
              buttonText="Создать топик"
            />
            <FormLinkButton to={ROUTES_NAMES.FORUM} buttonText="Отменить" />
          </div>
        </Form>
      </Formik>
    </div>
  )
}
