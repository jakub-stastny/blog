import React from 'react'
import Email from '../Email/Email'
import OutboundLink from '../OutboundLink/OutboundLink'
import { personalContactEmail } from '../config'

export default () => (
  <ul>
    <li>Telegram <OutboundLink eventLabel="telegram" to="https://t.me/jakubstastny">@jakubstastny</OutboundLink></li>
    <li>Email <Email personal /></li>
    <li>iMessage <Email personal /></li>
    {/* Don't bother with Google Hangouts, Google will kill it in June 2020 and will replace it will Google Hangouts Chat, which is only for Google Apps for business and with Google Meet which is only for meetings. */}
  </ul>
)
