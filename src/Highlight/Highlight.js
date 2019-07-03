import React, { memo } from 'react'
import styles from './Highlight.module.css'

export default memo(({ children }) => (
  <div className={styles.highlight}>{children}</div>
))
