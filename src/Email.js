import React from 'react'
import Obfuscate from 'react-obfuscate'
import { contactEmail } from './config'

// subject, body as a query string.
// Not everyone has mailto: associated.

export function SelfLinkingEmail ({ subject }) {
  return <Obfuscate email={contactEmail} />
}

export default function Email ({ subject, children }) {
  return <Obfuscate email={contactEmail} headers={{subject}}>{children}</Obfuscate>
}
