import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

import About from './About';
import Index from './Index';

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

      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default AppRouter;
