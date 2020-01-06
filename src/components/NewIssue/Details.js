import React, { Component} from 'react';
import './Details.css';
// import '../font-awesome/css/font-awesome.css';


class Details extends Component {

  render() {
    return (
      <div className="Details">
        <div className="row start-xs">
          <div class="col-xs-12">
            <h3>COLOR</h3>
            <select>
              <option value="green"></option>
            </select>
          </div>
        </div>

        <div className="row start-xs">
          <div class="col-xs-12">
            <h3>OWNER</h3>
            <select>
              <option value="green"></option>
            </select>
          </div>
        </div>

        <div className="row start-xs">
          <div class="col-xs-12">
            <h3>PROJECT</h3>
            <select>
              <option value="green"></option>
            </select>
          </div>
        </div>

        <div className="row start-xs">
          <div class="col-xs-12">
            <h3>STATE</h3>
            <select>
              <option value="green"></option>
            </select>
          </div>
        </div>

        <div className="row start-xs">
          <div class="col-xs-12">
            <h3>RELEASE</h3>
            <select>
              <option value="green"></option>
            </select>
          </div>
        </div>

        <div className="row start-xs">
          <div class="col-xs-12">
            <h3>ITERATION</h3>
            <select>
              <option value="green"></option>
            </select>
          </div>
        </div>

        <div className="row start-xs">
          <div class="col-xs-12">
            <h3>PRIORITY</h3>
            <select>
              <option value="green"></option>
            </select>
          </div>
        </div>

      </div>
    );
  }
}

export default Details;