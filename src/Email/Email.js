import React, { memo } from 'react'
import Obfuscate from 'react-obfuscate'
import { contactEmail } from '../config'

export default memo(({ subject, children }) => (
  <Obfuscate email={contactEmail} headers={{ subject }}>{children}</Obfuscate>
))
