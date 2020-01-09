import React, { memo } from 'react'
import Mailchimp from 'react-mailchimp-form'
import { mailchimpURL } from '../config'

const fields = [
  {
    name: 'EMAIL',
    placeholder: 'your@email.com',
    type: 'email',
    required: true
  }
]

export const NewsletterSignUpLink = ({ children }) => (
  <a href={mailchimpURL} target="_blank" rel="noopener noreferrer">{children}</a>
)

export default memo(() => (
  <Mailchimp action={mailchimpURL} fields={fields} />
))
