import React, { memo } from 'react'
import Moment from 'react-moment'

/* Update every 30 seconds. */
const updateInterval = 30 * 1000

export default memo(({ date }) => (
  <Moment date={new Date(date)} fromNow interval={updateInterval} />
))
