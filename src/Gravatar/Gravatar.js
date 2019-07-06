import React, { memo } from 'react'
import Gravatar from 'react-gravatar'
import { gravatarEmail } from '../config'
import { gravatar as gravatarClassName } from './Gravatar.module.css'
import { assert } from '../utils'

assert(gravatarClassName, 'gravatarClassName is expected to be defined')

export default memo(({ className }) => (
  <Gravatar className={[gravatarClassName, className].filter(Boolean).join(' ')} email={gravatarEmail} size={100} alt="&lt;gravatar&gt;" />
))
