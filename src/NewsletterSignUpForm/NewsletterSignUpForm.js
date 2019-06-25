import React from 'react'
import Mailchimp from 'react-mailchimp-subscribe'
import { mailchimpURL } from '../config'

export default () => (
  <Mailchimp url={mailchimpURL} />
)
