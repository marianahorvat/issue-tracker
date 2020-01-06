import React, { Component} from 'react';
import './Requests.css';
import Request from '../components/Requests/Request';

class Requests extends Component {

  render() {
    return (
      <div className="Requests">
        
        <div className="row start-xs">
          <div class="col-xs-12 requests-title">
          <h5>REQUESTS</h5>
            <span className="all-requests">All Requests</span>
            <select>
              <option value="green"></option>
            </select>
          </div>
        </div>

        <div className="row start-xs requests-header">
          <div class="col-sm-1 requests-header-item">DEFECT</div>
          <div class="col-sm-1 requests-header-item">STATE</div>
          <div class="col-sm-2 requests-header-item">TITLE</div>
          <div class="col-sm-1 requests-header-item">PRIORITY</div>
          <div class="col-sm-1 requests-header-item">SUBMITTED BY</div>
          <div class="col-sm-1 requests-header-item">OWNER</div>
          <div class="col-sm-1 requests-header-item">PROJECT</div>
          <div class="col-sm-1 requests-header-item">RELEASE</div>
          <div class="col-sm-1 requests-header-item">OPEN DATE</div>
          <div class="col-sm-1 requests-header-item">CLOSE DATE</div>
          <div class="col-sm-1 requests-header-item">ITERATION</div>
        </div>
        <div className="requests-container">
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
        </div>
        
      </div>
    );
  }
}

export default Requests;