/* TODO: Merge with Errors/Errors? */

import React, { Component } from 'react'
import styles from './ErrorBoundary.module.css'

const ErrorScreen = () => (
  <div class={styles.box}>
    <h1>Something went wrong</h1>
  </div>
)

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
    // logErrorToMyService(error, info)
  }

  render() {
    return this.state.hasError ? <ErrorScreen /> : this.props.children
  }
}
