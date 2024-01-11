import React from 'react'
import { UserFormLinkButton } from '../UserFormLinkButton'
import style from './index.module.scss'

type TUserProfileButtonBlock = {
  logOut: () => void
  userDataChange: () => void
  passwordChange: () => void
  editCityChange: () => void
}

export const UserProfileButtonBlock = ({
  logOut,
  passwordChange,
  userDataChange,
  editCityChange,
}: TUserProfileButtonBlock) => {
  return (
    <div className={style.buttonWrapper}>
      <UserFormLinkButton text="Изменить город" callback={editCityChange} />
      <UserFormLinkButton text="Изменить данные" callback={userDataChange} />
      <UserFormLinkButton text="Изменить пароль" callback={passwordChange} />
      <UserFormLinkButton
        text="Выйти"
        callback={logOut}
        isNoBorder
        className={style.redText}
      />
    </div>
  )
}
