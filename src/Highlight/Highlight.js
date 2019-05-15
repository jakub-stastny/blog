import React from 'react'
import styles from './Highlight.module.css'
import { assert } from '../utils'

export default function Highlight ({ children }) {
  assert(children, 'Highlight requires children')
  return <div className={styles.highlight}>{children}</div>
}
