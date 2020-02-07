import React from 'react'
import Email from '../Email/Email'
import OutboundLink from '../OutboundLink/OutboundLink'
import vCardJS from 'vcards-js'
import gravatar from 'gravatar'
import { personalContactEmail, gravatarEmail } from '../config'

export const vCard = vCardJS()
vCard.firstName = 'Jakub'
vCard.lastName = 'Šťastný'
vCard.url = window.location.hostname
vCard.workUrl = 'https://t.me/jakubstastny'
vCard.photo.attachFromUrl(gravatar.url(gravatarEmail), 'JPEG')
vCard.source = window.location.href
vCard.email = personalContactEmail

export default () => (
  <ul>
    <li>Telegram <OutboundLink eventLabel="telegram" to="https://t.me/jakubstastny">@jakubstastny</OutboundLink></li>
    <li>Email <Email personal /></li>
    <li>iMessage <Email personal /></li>
    {/* Don't bother with Google Hangouts, Google will kill it in June 2020 and will replace it will Google Hangouts Chat, which is only for Google Apps for business and with Google Meet which is only for meetings. */}
  </ul>
)
