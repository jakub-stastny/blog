import React from 'react'
import Obfuscate from 'react-obfuscate'
import config from './config'

// subject, body as a query string.
// Not everyone has mailto: associated.

const SelfLinkingEmail = ({subject})  => <Obfuscate email={config.contactEmail} />
export { SelfLinkingEmail }

export default function Email ({ subject, children }) {
  return <Obfuscate email={config.contactEmail} headers={{subject}}>{children}</Obfuscate>
}
