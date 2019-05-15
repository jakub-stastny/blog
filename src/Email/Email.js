import React from 'react'
import Obfuscate from 'react-obfuscate'
import { contactEmail } from '../config'
import { assert } from '../utils'

// subject, body as a query string.
// Not everyone has mailto: associated.

export function SelfLinkingEmail ({ subject }) {
  assert(subject, 'Subject is required')
  assert(contactEmail, 'Contact email is required to be in the config')
  return <Obfuscate email={contactEmail} />
}

export default function Email ({ subject, children }) {
  assert(subject, 'Subject is required')
  assert(children, 'Children are required')
  assert(contactEmail, 'Contact email is required to be in the config')
  return <Obfuscate email={contactEmail} headers={{ subject }}>{children}</Obfuscate>
}
