import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import styles from '../App/App.module.css'

import {
  homePagePath,
  aboutPagePath,
  myServicesPagePath,
  curriculumVitaePagePath,
  nowPagePath,
  subscribePagePath,
  getPostPagePath,
  getTagPagePath,
  tagsPagePath
} from '../routes'

// import Ribbon from '../Ribbon/Ribbon'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import PostPage from '../PostPage/PostPage'
import TagPage from '../TagPage/TagPage'
import TagsPage from '../TagsPage/TagsPage'
import NowPage from '../NowPage/NowPage'
import SubscribePage from '../SubscribePage/SubscribePage'
import AboutPage from '../AboutPage/AboutPage'
import MyServicesPage from '../MyServicesPage/MyServicesPage'
import CurriculumVitaePage from '../CurriculumVitaePage/CurriculumVitaePage'
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
                  <Route exact path={homePagePath} component={HomePage} />
                  <Route exact path={aboutPagePath} component={AboutPage} />
                  <Route exact path={myServicesPagePath} component={MyServicesPage} />
                  <Route exact path={curriculumVitaePagePath} component={CurriculumVitaePage} />
                  <Route exact path={nowPagePath} component={NowPage} />
                  <Route exact path={subscribePagePath} component={SubscribePage} />
                  <Route path={getPostPagePath(':slug')} component={PostPage} />
                  <Route path={getTagPagePath(':slug')} component={TagPage} />
                  <Route exact path={tagsPagePath} component={TagsPage} />
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
