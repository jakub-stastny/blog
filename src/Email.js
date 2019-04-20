import React from 'react'
import Obfuscate from 'react-obfuscate'

// subject, body as a query string.
// Not everyone has mailto: associated.

const email = process.env.REACT_APP_CONTACT_EMAIL
const SelfLinkingEmail = ({subject})  => <Obfuscate email={email} headers={{subject}} />
export {SelfLinkingEmail}
export default ({subject, children}) => <Obfuscate email={email} headers={{subject}}>{children}</Obfuscate>
