import React, { Component } from 'react';
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
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">My Requests</a></li>
                      <li><a href="#">Knowledge Base</a></li>
                      <li><a href="#">New Issue</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </nav>
                </div>
          </div>
        </div>
        )
    }
}

export default Nav;
