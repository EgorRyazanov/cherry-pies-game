import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { FormWrapper } from '../../components/FormWrapper'
import { FormHeader } from '../../components/FormHeader'
import { FormInput } from '../../components/FormInput'
import { FormSubmitButton } from '../../components/FormSubmitButton'
import { FormLinkButton } from '../../components/FormAsLinkButton'
import { ROUTES_NAMES } from '../../const/routeNames'
import { useNavigate } from 'react-router-dom'
import { authApi } from '../../api/authApi'
import { TSignupRequestData } from '../../api/types'
import { validate } from '../../utils/validator'
import { API_ERROR_MESSAGES } from '../../const/api'
import { MyErrorMessage } from '../../components/myErrorMessage'
import { inputsData, REG_FORM_ERROR } from '../../const/registrationPage'

const RegistrationPage = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const registrationHandler = (
    data: TSignupRequestData,
    { setErrors }: { setErrors: (error: Record<string, string>) => void }
  ) => {
    const { password, passwordRepeat } = data

    if (password && password !== passwordRepeat) {
      setErrors({
        password: REG_FORM_ERROR.PASSWORD_DONT_MATCH,
        passwordRepeat: REG_FORM_ERROR.PASSWORD_DONT_MATCH,
      })
      return
    }

    authApi
      .signup(data)
      .then(response => {
        console.log(response)
        navigate(ROUTES_NAMES.MAIN)
      })
      .catch(error => {
        const { reason } = error.response.data

        if (reason === API_ERROR_MESSAGES.USER_ALREADY_IN_SYSTEM) {
          navigate(ROUTES_NAMES.MAIN)
        }

        setErrorMessage(reason)
      })
  }

  const cleanFetchErrorHandler = () => {
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const formInputs = inputsData.map(
    ({ id, type, name, labelText, placeholder }) => (
      <FormInput
        key={id}
        id={id}
        name={name}
        type={type}
        labelText={labelText}
        placeholder={placeholder}
      />
    )
  )

  return (
    <div className="page_wrapper page_background">
      <Formik
        initialValues={{
          email: '',
          login: '',
          first_name: '',
          second_name: '',
          phone: '',
          password: '',
          passwordRepeat: '',
        }}
        onSubmit={registrationHandler}
        validate={validate}>
        <Form onChange={cleanFetchErrorHandler} className="form">
          <FormWrapper>
            <FormHeader text="Регистрация" />
            <div className="form_inputs-wrapper">
              {formInputs}
              {errorMessage ? <MyErrorMessage message={errorMessage} /> : null}
            </div>
          </FormWrapper>
          <div className="form_buttons-wrapper button-block_login-reg-page">
            <FormSubmitButton
              disabled={false}
              buttonType="submit"
              buttonText="Зарегистрироваться"
            />
            <FormLinkButton to={ROUTES_NAMES.SIGN_IN} buttonText="Войти" />
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage
