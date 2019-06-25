import React from 'react'
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

export default () => (
  <Mailchimp action={mailchimpURL} fields={fields} />
)
