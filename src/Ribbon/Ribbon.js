import React from 'react'
import styles from './Ribbon.module.css'
import { assert } from '../utils'

const classNames = [styles.cr, styles.top, styles.right, styles.red]

export default function Ribbon ({ children }) {
  assert(children, 'Ribbon requires children')
  return <div className={classNames.join(' ')}>{children}</div>
}
