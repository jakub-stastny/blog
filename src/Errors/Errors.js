import React, { Component } from 'react'
import { Online, Offline } from 'react-detect-offline'
import { wrapper as wrapperClassName, offline as offlineClassName } from './Errors.module.css'
import { assert } from '../utils'

assert(wrapperClassName, 'wrapperClassName is expected to be defined')
assert(offlineClassName, 'offlineClassName is expected to be defined')

/* TODO: This should be an error boundary. */
export const FetchError = (error) => (
  <div className={wrapperClassName}>
    <h1>Data cannot be fetched</h1>
    <Online>
      <a href={window.location.pathname}>Refresh the page</a>
    </Online>

    <Offline>
      <div className={offlineClassName}>
        You are currently offline.
      </div>
    </Offline>
  </div>
)

export const RoutingErrorPage = () => (
  <h2>No match for <code>{window.location.pathname}</code></h2>
)

const ErrorScreen = () => (
  <div class={wrapperClassName}>
    <h1>Something went wrong</h1>
  </div>
)

export default class ErrorBoundary extends Component {
  state = {hasError: false}

  componentDidCatch(error, info) {
    this.setState({hasError: true})
    // logErrorToMyService(error, info)
  }

  render() {
    return this.state.hasError ? <ErrorScreen /> : this.props.children
  }
}
