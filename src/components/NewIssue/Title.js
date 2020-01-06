import React, { Component} from 'react';
import './Title.css';

class Title extends Component {

  render() {
    return (
      <div className="Title">
        <div>
          <div className="row">
            <div class="col-xs-1">
              <span className="bug-icon"><i className="fa fa-bug" aria-hidden="true"></i></span>
            </div>
            <div class="col-xs-3">
              <input type="text" className="defect-number" name="defect-number" placeholder="Defect number" />
            </div>
            <div class="col-xs-7">
              <input type="text" className="defect-title" name="defect-title" placeholder="Defect title" />
            </div>
            <div class="col-xs-1">
              <span className="close-icon"><i className="fa fa-close" aria-hidden="true"></i></span>
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div class="col-sm-12 col-md-12 col-lg-7">
              <button className="btn btn-title-details" type="submit" name="button"><i class="fa fa-caret-down"></i>Details</button>
              <button className="btn" type="submit" name="button"><i class="fa fa-history"></i>Revision History</button>
              <button className="btn" type="submit" name="button"><i class="fa fa-history"></i>Duplicates</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;