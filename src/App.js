import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

import About from './About';
import Home from './Home';
import NoMatch from './Errors';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <h1>
          <NavLink to="/" activeClassName="selected-link">Blog</NavLink>
        </h1>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <footer>
      </footer>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
