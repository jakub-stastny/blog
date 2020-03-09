import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import Moment from 'react-moment'

/* Update every 30 seconds. */
const updateInterval = 30 * 1000

export default memo(function PublishedDate ({ date }) {
  const { lang } = useContext(LangContext)

  return (
    <Moment date={new Date(date)} fromNow interval={updateInterval} locale={lang} />
  )
})
