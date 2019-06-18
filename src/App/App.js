import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from '../App/App.module.css'

// import Ribbon from '../Ribbon/Ribbon'
import Post from '../Post/Post'
import Tag from '../Tag/Tag'
import TagsPage from '../TagsPage/TagsPage'
// TODO: Use the Page suffix generally.

import About from '../About/About'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { RoutingError } from '../Errors/Errors'

import { assert } from '../utils'

import { isProduction, googleAnalyticsTrackingId } from '../config'
import GoogleAnalytics from 'react-router-ga'

/* https://fontawesome.com/how-to-use/on-the-web/using-with/react */
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// library.add(faEnvelope)

export default function AppRouter () {
  return <Router>
    {/* The ID has to be empty in development. Google Analytics detect localhost, but not a remote IP. */}
    <GoogleAnalytics id={googleAnalyticsTrackingId} debug={isProduction}>
      {/*<Ribbon>Hire me <Email subject="Hey! I'm looking for a Ruby/JS dev! Are you available?"><FontAwesomeIcon icon={faEnvelope} color="DodgerBlue" /></Email></Ribbon>*/}

      <div className={assert(styles.content)}>
        <Header />

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts/:slug" component={Post} />
            <Route path="/tags/:slug" component={Tag} />
            <Route path="/tags" component={TagsPage} />
            <Route component={RoutingError} />
          </Switch>
        </main>
      </div>

      <Footer />
    </GoogleAnalytics>
  </Router>
}
