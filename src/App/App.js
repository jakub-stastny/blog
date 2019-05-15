import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from '../App/App.module.css'

import Link from '../Link/Link'
import Ribbon from '../Ribbon/Ribbon'
import Email from '../Email/Email'
import Post from '../Post/Post'
import Tag from '../Tag/Tag'

import About from '../About/About'
import Home from '../Home/Home'
import { RoutingError } from '../Errors/Errors'

import { isProduction, googleAnalyticsTrackingId } from '../config'
import GoogleAnalytics from 'react-router-ga'

/* https://fontawesome.com/how-to-use/on-the-web/using-with/react */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faTwitter, faGithub)

export default function AppRouter () {
  return <Router>
    {/* The ID has to be empty in development. Google Analytics detect localhost, but not a remote IP. */}
    <GoogleAnalytics id={googleAnalyticsTrackingId} debug={isProduction}>
      <Ribbon>Hire me <Email subject="Hey! I'm looking for a Ruby/JS dev! Are you available?"><FontAwesomeIcon icon={faEnvelope} color="DodgerBlue" /></Email></Ribbon>

      <div className={styles.content}>
        <header className={styles.main}>
          <h1>
            <Link to="/">James C Russell's blog</Link>
          </h1>
          <p>
            Web development, Ruby, React.js, learning languages and life.
          </p>
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts/:slug" component={Post} />
            <Route path="/tags/:slug" component={Tag} />
            <Route component={RoutingError} />
          </Switch>
        </main>
      </div>

      <footer className={styles.main}>
        <nav>
          <ul>
            <li><Link to="/">Posts</Link></li>
            <li><Link to="/about">About me</Link></li>
            <li><a href="https://twitter.com/botanicus" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} color="#00aced" /></a></li>
            <li><a href="https://github.com/botanicus" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="black" /></a></li>
          </ul>
        </nav>
      </footer>
    </GoogleAnalytics>
  </Router>
}
