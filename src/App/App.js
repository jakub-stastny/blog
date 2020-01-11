import React, { useEffect } from 'react'
import { useRoutes } from 'hookrouter'

import styles from '../App/App.module.css'

import routes from '../routes'

import ErrorBoundary, { RoutingErrorPage } from '../Errors/Errors'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { StateContextProvider } from '../StateContext'
import { LangContextProvider } from '../LangContext'

import { assert } from '../utils'

import ReactGA from 'react-ga'
import { isProduction, googleAnalyticsTrackingId } from '../config'

export default function App () {
  const currentRoute = useRoutes(routes)

  useEffect(() => {
    if (isProduction) ReactGA.initialize(googleAnalyticsTrackingId/*, {debug: true}*/)
  }, [])

  useEffect(() => {
    if (isProduction) ReactGA.pageview(window.location.pathname)
  })

  return (
    <LangContextProvider>
      <StateContextProvider>
        <div className={assert(styles.content)}>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>

          <main className={assert(styles.mainColumn)}>
            <ErrorBoundary>
              {currentRoute || <RoutingErrorPage />}
            </ErrorBoundary>
          </main>
        </div>

        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </StateContextProvider>
    </LangContextProvider>
  )
}
