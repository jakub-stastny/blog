import React from 'react'
import Moment from 'react-moment'
import styles from './PublishedDate.module.css'
import { assert } from '../utils'

/* Update every 30 seconds. */
export default ({ date }) => (
  <span className={assert(styles.date)}>
    Published {' '}
    <Moment date={new Date(date)} fromNow interval={30000} />
  </span>
)
