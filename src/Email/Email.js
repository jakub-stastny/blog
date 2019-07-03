import React, { memo } from 'react'
import Obfuscate from 'react-obfuscate'
import { contactEmail } from '../config'

// subject, body as a query string.
// Not everyone has mailto: associated.

export const SelfLinkingEmail = memo(({ subject }) => (
  <Obfuscate email={contactEmail} />
))

export default memo(({ subject, children }) => (
  <Obfuscate email={contactEmail} headers={{ subject }}>{children}</Obfuscate>
))
