import React from 'react'
import Obfuscate from 'react-obfuscate'
import config from './config'

// subject, body as a query string.
// Not everyone has mailto: associated.

const SelfLinkingEmail = ({subject})  => <Obfuscate email={config.contactEmail} headers={{subject}} />
export {SelfLinkingEmail}
export default ({subject, children}) => <Obfuscate email={config.contactEmail} headers={{subject}}>{children}</Obfuscate>
