import React from 'react'
import { useRoutes } from 'hookrouter'

import styles from '../App/App.module.css'

import routes from '../router'

import ErrorBoundary, { RoutingErrorPage } from '../Errors/Errors'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import GoogleAnalyticsTracker from '../GoogleAnalyticsTracker/GoogleAnalyticsTracker'

import { StateContextProvider } from '../StateContext'
import { LangContextProvider } from '../LangContext'
import { SettingsContextProvider } from '../SettingsContext'

import { assert } from '../utils'

export default function App () {
  const currentRoute = useRoutes(routes)

  return (
    <SettingsContextProvider>
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
            <GoogleAnalyticsTracker /> {/* TODO: Wrap in a silent error boundary. */}
          </ErrorBoundary>
        </StateContextProvider>
      </LangContextProvider>
    </SettingsContextProvider>
  )
}
