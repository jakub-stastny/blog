import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import styles from './App.css';

import About from './About';
import Home from './Home';
import NoMatch from './Errors';

const AppRouter = () => (
  <Router>
    <div style={{marginTop: '-20px'}}>
      <div styleName="content">
      <header>
        <h1>
          {/* The activeClassName is not really safe or modular CSS compatible. */}
          <NavLink to="/" activeClassName="selected-link">James C Russell's blog</NavLink>
        </h1>
        <p>
          Web development, Ruby, React.js, learning languages and life.
          {console.log(styles.content)}
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
            <li><NavLink to="/" activeClassName="selected-link">Posts</NavLink></li>
            <li><NavLink to="/about" activeClassName="selected-link">About me</NavLink></li>
            <li><a href="https://twitter.com/botanicus" target="_blank" rel="noopener noreferrer">@botanicus</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  </Router>
)

export default AppRouter;
