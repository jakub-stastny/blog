import React from 'react'
import Email from '../Email/Email'
import OutboundLink from '../OutboundLink/OutboundLink'
// import { personalContactEmail } from '../config'

/*
  Google Hangouts are going to be shut down in June 2020.
  Do not use anything else, there's email, messenger and phone, that's plenty.
*/

export default () => (
  <ul>
    <li>Telegram <OutboundLink eventLabel="telegram" to="https://t.me/jakubstastny">@jakubstastny</OutboundLink></li>
    <li>Email <Email personal /></li>
    <li>Phone</li>
  </ul>
)
