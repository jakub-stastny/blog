import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from '../App/App.module.css'

// import Ribbon from '../Ribbon/Ribbon'
import PostPage from '../PostPage/PostPage'
import TagPage from '../TagPage/TagPage'
import TagsPage from '../TagsPage/TagsPage'
import NowPage from '../NowPage/NowPage'
import AboutPage from '../AboutPage/AboutPage'
import HomePage from '../HomePage/HomePage'
import { RoutingErrorPage } from '../Errors/Errors'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { assert } from '../utils'

import { isProduction, googleAnalyticsTrackingId } from '../config'
import GoogleAnalytics from 'react-router-ga'

/* https://fontawesome.com/how-to-use/on-the-web/using-with/react */
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// library.add(faEnvelope)

export default () => (
  <Router>
    {/* The ID has to be empty in development. Google Analytics detect localhost, but not a remote IP. */}
    <GoogleAnalytics id={googleAnalyticsTrackingId} debug={isProduction}>
      {/*<Ribbon>Hire me <Email subject="Hey! I'm looking for a Ruby/JS dev! Are you available?"><FontAwesomeIcon icon={faEnvelope} color="DodgerBlue" /></Email></Ribbon>*/}

      <div className={assert(styles.content)}>
        <Header />

        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/posts/:slug" component={PostPage} />
            <Route path="/tags/:slug" component={TagPage} />
            <Route path="/tags" component={TagsPage} />
            <Route path="/now" component={NowPage} />
            <Route component={RoutingErrorPage} />
          </Switch>
        </main>
      </div>

      <Footer />
    </GoogleAnalytics>
  </Router>
)
