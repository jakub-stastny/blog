import React from 'react'
import { Online, Offline } from 'react-detect-offline'
import styles from './Errors.module.css'

/* TODO: This should be an error boundary. */
export const FetchError = (error) => (
  <div className={styles.wrapper}>
    <h1>Data cannot be fetched</h1>
    <Online>
      <a href={window.location.pathname}>Refresh the page</a>
    </Online>

    <Offline>
      <div className={styles.offline}>
        You are currently offline.
      </div>
    </Offline>
  </div>
)

export const RoutingErrorPage = () => (
  <h2>No match for <code>{window.location.pathname}</code></h2>
)
