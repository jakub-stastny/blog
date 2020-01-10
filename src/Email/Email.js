import React, { memo } from 'react'
import Obfuscate from 'react-obfuscate'
import { contactEmail, personalContactEmail } from '../config'

export default memo(({ personal, subject, children }) => (
  <Obfuscate email={personal ? personalContactEmail : contactEmail} headers={{ subject }}>{children}</Obfuscate>
))
