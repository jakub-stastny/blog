import React from 'react'
import styles from './Errors.module.css'

/* TODO: This should be an error boundary. */
export const FetchError = (error) => (
  <div className={styles.wrapper}>
    <h1>Data cannot be fetched</h1>
  </div>
)

export const RoutingError = () => (
  <h2>No match for <code>{window.location.pathname}</code></h2>
)
