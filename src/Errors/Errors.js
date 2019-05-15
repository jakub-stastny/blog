import React from 'react'
import styles from './Errors.module.css'

export const FetchError = (error) => (
  <div className={styles.wrapper}>
    <h1>Data cannot be fetched</h1>
  </div>
)

export const RoutingError = () => (
  <h2>No match for <code>{window.location.pathname}</code></h2>
)
