import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

type TFormAsLinkButton = {
  to: string
  buttonText: string
  onClick?: () => void
  className?: string
}

export const FormLinkButton = ({
  to,
  buttonText,
  onClick,
  className,
}: TFormAsLinkButton) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`button form_button ${className} ${styles.form_link_button} ${styles.font_24}`}>
      {buttonText}
    </Link>
  )
}
