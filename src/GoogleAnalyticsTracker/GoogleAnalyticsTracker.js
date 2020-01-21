import React, { useContext, useEffect } from 'react'
import ReactGA from 'react-ga'
import SettingsContext from '../SettingsContext'
import { isProduction, googleAnalyticsTrackingId } from '../config'

export default function GoogleAnalyticsTracker () {
  const settings = useContext(SettingsContext)
  console.log('settings', settings)

  useEffect(() => {
    if (isProduction && !settings.dev) {
      ReactGA.initialize(googleAnalyticsTrackingId, {gaOptions: {siteSpeedSampleRate: 100}})
    }
  }, [])

  useEffect(() => {
    if (isProduction && !settings.dev) {
      ReactGA.pageview(window.location.pathname)
    }
  })

  return null
}
