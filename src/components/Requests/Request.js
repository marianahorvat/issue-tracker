import React, { Component} from 'react';
// import './Request.css';
// import '../font-awesome/css/font-awesome.css';


class Request extends Component {

  render() {
    return (
      <div className="Request">

        <div className="row start-xs request">
          <div class="col-sm-1 request-item">DE000XX</div>
          <div class="col-sm-1 request-item">OPEN</div>
          <div class="col-sm-2 request-item">As a User, I can't sign into my account</div>
          <div class="col-sm-1 request-item">HIGH</div>
          <div class="col-sm-1 request-item">Jason B.</div>
          <div class="col-sm-1 request-item">Aaron Shane</div>
          <div class="col-sm-1 request-item">Skynet</div>
          <div class="col-sm-1 request-item">20.01</div>
          <div class="col-sm-1 request-item">2019-09-10</div>
          <div class="col-sm-1 request-item">N/A</div>
          <div class="col-sm-1 request-item">Jan 2020</div>
          <hr></hr>
        </div>

      </div>
    );
  }
}

export default Request;