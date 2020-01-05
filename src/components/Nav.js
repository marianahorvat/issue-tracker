import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './Nav.css';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Knowledge from '../pages/Knowledge';
import NewIssue from '../pages/NewIssue';
import Requests from '../pages/Requests';


class Nav extends Component {
  render() {
    return (
      <div class="container">
        <div class="row end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
          <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
            <h1><span class="primary-text">i</span><span class="secondary-text">Tracker</span></h1>
          </div>
              <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <nav role="navigation" id="navbar">
                  <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/requests">My Requests</Link></li>
                    <li><Link to="knowledge">Knowledge Base</Link></li>
                    <li><Link to="new-issue">New Issue</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
          <Route path="/knowledge" component={Knowledge} />
          <Route path="/new-issue" component={NewIssue} />
          <Route path="/requests" component={Requests} />
        </Switch>
      </div>
    )
  }
}

export default Nav;
