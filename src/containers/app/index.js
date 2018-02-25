import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Search from '../main/index';

const App = () => (
  <div>
    <header>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="collapse navbar-collapse show">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
            <Link to="/about-us" className="nav-item nav-link">About</Link>
          </div>
        </div>
      </nav>
    </header>

    <main className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/search" component={Search} />
    </main>
  </div>
);

export default App;
