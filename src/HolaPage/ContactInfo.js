import React from 'react'
import Email from '../Email/Email'

export default () => (
  <ul>
    <li>Telegram <a href="https://t.me/jakubstastny">@jakubstastny</a></li>
    <li>Email <Email personal /></li>
    <li>iMessage <Email personal /></li>
  </ul>
)
