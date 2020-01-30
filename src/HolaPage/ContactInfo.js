import React from 'react'
import Email from '../Email/Email'
import OutboundLink from '../OutboundLink/OutboundLink'

export default () => (
  <ul>
    <li>Telegram <OutboundLink eventLabel="telegram" to="https://t.me/jakubstastny">@jakubstastny</OutboundLink></li>
    <li>Email <Email personal /></li>
    <li>iMessage <Email personal /></li>
    <li>Google Hangouts <Email personal /></li>
  </ul>
)
