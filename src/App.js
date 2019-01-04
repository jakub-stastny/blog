import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import Link from './Link';

import About from './About';
import Home from './Home';
import NoMatch from './Errors';

// const ensure = (value) => value || throw("Undefined")

const AppRouter = () => (
  <Router>
    <div style={{marginTop: '-20px'}}>
      <div className={styles.content}>
      <header>
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
          <Route component={NoMatch} />
        </Switch>
      </main>
      </div>

      <footer>
        <nav>
          <ul>
            <li><Link to="/">Posts</Link></li>
            <li><Link to="/about">About me</Link></li>
            <li><a href="https://twitter.com/botanicus" target="_blank" rel="noopener noreferrer">@botanicus</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  </Router>
)

export default AppRouter;
