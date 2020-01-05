import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {

    render() {
        return (
          <div class="container">
          <div class="row end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
              <h1><span class="primary-text">i</span><span class="secondary-text">Track</span></h1>
            </div>
                <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                  <nav role="navigation" id="navbar">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/requests">My Requests</Link></li>
                      <li><Link to="knowledge">Knowledge Base</Link></li>
                      <li><Link to="new-issue">New Issue</Link></li>
                      <li><Link to="contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
          </div>
        </div>
        )
    }
}

export default Nav;
