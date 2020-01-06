import React, { Component} from 'react';
import './Save.css';
// import '../font-awesome/css/font-awesome.css';


class Save extends Component {

  render() {
    return (
      <div className="Save">

        <div className="row center-xs">
          <div class="col-sm-12 col-md-12 col-lg-7">
              <button className="btn" type="submit" name="button">DISCARD</button>
              <button className="btn btn-title-details" type="submit" name="button">SAVE</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Save;