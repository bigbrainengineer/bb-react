import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../home';
import About from '../about';
import Search from '../main/index';

const App = (props) => {
  const navClass = 'nav-item nav-link';
  return (
    <div>
      <header>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <div className="collapse navbar-collapse show">
            <div className="navbar-nav">
              <Link
                to="/"
                className={`${navClass} ${props.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className={`${navClass} ${props.pathname === '/about-us' ? 'active' : ''}`}
              >
                About
              </Link>
              <div className="nav-item nav-link">
                { props.isAuthenticated ? 'Logged in' : 'Logged out' }
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
      <div><Route exact path="/search" component={Search} /></div>
    </div>
  );
};

App.propTypes = {
  pathname: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
