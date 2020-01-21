import { useContext, useEffect } from 'react'
import ReactGA from 'react-ga'
import SettingsContext from '../SettingsContext'
import { isProduction, googleAnalyticsTrackingId } from '../config'

export default function GoogleAnalyticsTracker () {
  const { dbg, dev } = useContext(SettingsContext)

  useEffect(() => {
    if (isProduction && !dev) {
      ReactGA.initialize(googleAnalyticsTrackingId, {
        debug: dbg,
        gaOptions: {siteSpeedSampleRate: 100}
      })
    }
  }, [dbg, dev])

  useEffect(() => {
    if (isProduction && !dev) {
      ReactGA.pageview(window.location.pathname)
    }
  })

  return null
}
