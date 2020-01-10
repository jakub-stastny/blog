import React, { memo } from 'react'
import Gravatar from 'react-gravatar'
import { gravatarEmail } from '../config'
import { assert } from '../utils'
import styles from './Gravatar.module.css'

export default memo(({ className }) => (
  <Gravatar className={[assert(styles.gravatar), className].filter(Boolean).join(' ')} email={gravatarEmail} size={100} alt="&lt;gravatar&gt;" />
))
