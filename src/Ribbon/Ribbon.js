import React from 'react'
import styles from './Ribbon.module.css'

const classNames = [styles.cr, styles.top, styles.right, styles.red]

export default function Ribbon ({children}) {
  return <div className={classNames.join(' ')}>{children}</div>
}
