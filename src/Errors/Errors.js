import React, { Component, useEffect } from 'react'
import ReactGA from 'react-ga'
import { Online, Offline } from 'react-detect-offline'
import styles from './Errors.module.css'
import { assert } from '../utils'

/* TODO: This should be an error boundary. */
export function FetchError ({ error }) {
  useEffect(() => {
    ReactGA.exception({description: JSON.stringify(error), fatal: true})
  }, [error])

  return (
    <div className={assert(styles.wrapper)}>
      <h1>Data cannot be fetched</h1>
      <Online>
        <a href={window.location.pathname}>Refresh the page</a>
      </Online>

      <Offline>
        <div className={assert(styles.offline)}>
          You are currently offline.
        </div>
      </Offline>
    </div>
  )
}

export function RoutingErrorPage () {
  useEffect(() => {
    ReactGA.exception({description: `Routing error: ${window.location.pathname}`, fatal: true})
  }, [])

  return <h1>No match for <code>{window.location.pathname}</code></h1>
}

const ErrorScreen = () => (
  <div className={assert(styles.wrapper)}>
    <h1>Something went wrong</h1>
  </div>
)

export default class ErrorBoundary extends Component {
  state = {hasError: false}

  componentDidCatch(error, info) {
    this.setState({hasError: true})
    ReactGA.exception({description: JSON.stringify(error, info)})
    console.error(error, info)
  }

  render() {
    return this.state.hasError ? <ErrorScreen /> : this.props.children
  }
}
