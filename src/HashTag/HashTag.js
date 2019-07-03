import React, { memo } from 'react'
import styles from './HashTag.module.css'

export default memo(({ children }) => (
  <span className={styles.hashtag}>{children}</span>
))
