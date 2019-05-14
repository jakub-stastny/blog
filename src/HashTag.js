import React from 'react'
import styles from './HashTag.module.css'

export default function HashTag ({ children }) {
  return <span className={styles.hashtag}>{children}</span>
}
