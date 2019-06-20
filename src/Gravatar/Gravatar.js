import React from 'react'
import Gravatar from 'react-gravatar'
import { gravatarEmail } from '../config'
import styles from './Gravatar.module.css'

export default () => (
  <Gravatar className={styles.gravatar} email={gravatarEmail} size={100} alt="&lt;gravatar&gt;" />
)
