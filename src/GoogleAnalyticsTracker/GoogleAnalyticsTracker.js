import React, { useContext, useEffect } from 'react'
import ReactGA from 'react-ga'
import SettingsContext from '../SettingsContext'
import { isProduction, googleAnalyticsTrackingId } from '../config'

export default function GoogleAnalyticsTracker () {
  const settings = useContext(SettingsContext)

  useEffect(() => {
    if (isProduction && !settings.dev) {
      ReactGA.initialize(googleAnalyticsTrackingId, {
        debug: settings.dbg,
        gaOptions: {siteSpeedSampleRate: 100}
      })
    }
  }, [])

  useEffect(() => {
    if (isProduction && !settings.dev) {
      ReactGA.pageview(window.location.pathname)
    }
  })

  return null
}
