import React, { Component} from 'react';
import './Showcase.css';

class Showcase extends Component {

  render() {
    return (
      <div className="Showcase">
        <section id="showcase">
          <div class="container">
            <div class="row center-xs center-sm center-md center-lg middle-xs -middle-sm middle-md middle-lg">
              <div class="col-xs-10 col-sm-10 col-md-10 col-lg-7 showcase-content">
                <h1>Welcome to <span class="primary-text">iTracker</span></h1>
                <p>Please submit your request or call support desk with any questions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Showcase;