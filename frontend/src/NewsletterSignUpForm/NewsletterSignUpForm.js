import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import Mailchimp from 'react-mailchimp-form'
import OutboundLink from '../OutboundLink/OutboundLink'
import { mailchimpURL } from '../config'
import { assert } from '../utils'
import styles from './NewsletterSignUpForm.module.css'
import { registerFont, FontAwesomeIcon } from '../FontAwesome/FontAwesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const translations = {
  sending: ["Sending ...", "Enviando ..."],
  success: ["Thank you for subscribing!", "¡Gracias para subscribirse!"],
  error: ["An unexpected error has occurred.", "Ha ocurrido un error."],
  empty: ["Please fill in your email", "Por favor pon tu email"],
  duplicate: ["Too many subscribe attempts for this email address", "Demasiado intentos de subscripción de esta dirección"],
  button: ["Subscribe!", "¡Subscríbete!"],
  here: ['Subscribe here', "Subscríbete aquí"]
}

registerFont(faArrowRight)

const fields = [
  {
    name: 'EMAIL',
    placeholder: 'your@email.com',
    type: 'email',
    required: true
  }
]

export const NewsletterSignUpLink = ({ children }) => (
  <OutboundLink eventLabel="newsletter-sign-up-link" to={mailchimpURL}>{children}</OutboundLink>
)

export default memo(function NewsletterSignUpForm () {
  const { t } = useContext(LangContext)

  const messages = {
    sending: t(translations.sending),
    success: t(translations.success),
    error: t(translations.error),
    empty: t(translations.empty),
    duplicate: t(translations.duplicate),
    button: t(translations.button)
  }

  return (
    <div className={assert(styles.box)}>
      <em className={assert(styles.here)}>{t(translations.here)}</em>
      <FontAwesomeIcon icon={faArrowRight} color="darkgreen" className={assert(styles.arrow)} />{' '}
      <Mailchimp action={mailchimpURL} fields={fields} messages={messages} />
    </div>
  )
})
