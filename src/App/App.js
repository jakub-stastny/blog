import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import styles from '../App/App.module.css'

// import Ribbon from '../Ribbon/Ribbon'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import PostPage from '../PostPage/PostPage'
import TagPage from '../TagPage/TagPage'
import TagsPage from '../TagsPage/TagsPage'
import NowPage from '../NowPage/NowPage'
import SubscribePage from '../SubscribePage/SubscribePage'
import AboutPage from '../AboutPage/AboutPage'
import HomePage from '../HomePage/HomePage'
import { RoutingErrorPage } from '../Errors/Errors'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import RightColumn from '../RightColumn/RightColumn'

import { assert } from '../utils'

import { isProduction, googleAnalyticsTrackingId } from '../config'
import GoogleAnalytics from 'react-router-ga'

export default () => (
  <Router>
    {/* The ID has to be empty in development. Google Analytics detect localhost, but not a remote IP. */}
    <GoogleAnalytics id={googleAnalyticsTrackingId} debug={isProduction}>
      {/*<Ribbon>Hire me <Email subject="Hey! I'm looking for a Ruby/JS dev! Are you available?"><FontAwesomeIcon icon={faEnvelope} color="DodgerBlue" /></Email></Ribbon>*/}

      <div className={assert(styles.content)}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>

        <main>
          <div className={styles.mainColumn}>
            <ErrorBoundary>
              <ScrollToTop>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/posts/:slug" component={PostPage} />
                  <Route path="/tags/:slug" component={TagPage} />
                  <Route path="/tags" component={TagsPage} />
                  <Route path="/now" component={NowPage} />
                  <Route path="/subscribe" component={SubscribePage} />
                  <Route component={RoutingErrorPage} />
                </Switch>
              </ScrollToTop>
            </ErrorBoundary>
          </div>

          <div className={styles.rightColumn}>
            <ErrorBoundary>
              <RightColumn />
            </ErrorBoundary>
          </div>
        </main>
      </div>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </GoogleAnalytics>
  </Router>
)
