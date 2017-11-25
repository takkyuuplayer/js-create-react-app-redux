import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

/* eslint-disable jsx-a11y/anchor-is-valid */
const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">Abount</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
