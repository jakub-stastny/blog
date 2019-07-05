import React, { Fragment } from 'react'

export default () => {
  const today = new Date()
  const firstOfJanuary = new Date(today.getFullYear(), 0, 1)

  const isDaylightTime = () => (
    today.getTimezoneOffset() === firstOfJanuary.getTimezoneOffset()
  )

  return (
    <Fragment>
      {isDaylightTime() ? 'Central Daylight Time (CDT UTC −5:00)' : 'Central Standard Time (CST UTC -6:00)'}
    </Fragment>
  )
}
