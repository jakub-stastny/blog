import React from 'react'
import styles from './Highlight.module.css'

export default function Highlight ({children}) {
  return <div className={styles.highlight}>{children}</div>
}
