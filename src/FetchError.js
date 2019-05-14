import React from 'react'
import styles from './FetchError.module.css'

export default function FetchError(error) {
  console.log(error)
  return <div className={styles.wrapper}>
    <h1>Data cannot be fetched</h1>
  </div>
}
