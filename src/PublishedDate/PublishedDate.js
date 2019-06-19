import React from 'react'
import Moment from 'react-moment'

/* Update every 30 seconds. */
const updateInterval = 30 * 1000

export default ({ date }) => (
  <Moment date={new Date(date)} fromNow interval={updateInterval} />
)
