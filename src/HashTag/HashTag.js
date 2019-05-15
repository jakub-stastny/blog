import React from 'react'
import { assert } from '../utils'
import styles from './HashTag.module.css'

export default function HashTag ({ children }) {
  assert(children, 'HashTag requires children')
  return <span className={styles.hashtag}>{children}</span>
}
