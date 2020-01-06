import React, { Component} from 'react';
import './Description.css';
import DescriptionBox from './DescriptionBox';


class Description extends Component {

  render() {
    return (
      <div className="Description">
        <div>

          <div className="row start-xs">
            <div class="col-xs-7">
                <button className="btn description-btn" type="submit" name="button"><i class="fa fa-check-square"></i>Ready</button>
                <button className="btn description-btn" type="submit" name="button"><i class="fa fa-ban"></i>Blocked</button>
            </div>
          </div>

          <div className="row start-xs">
            <div class="col-xs-7">
              <h3>DESCRIPTION</h3>
            </div>
          </div>
          <DescriptionBox />

          <div className="row start-xs">
            <div class="col-xs-7">
              <h3>ATTACHMENTS</h3>
            </div>
          </div>

          <div className="row start-xs">
          <input type="file" id="attachments" class="inputfile" name="attachments" multiple data-max="5" />
                  <label for="attachments" class="file__label">
                  
                    <span class="file__label-text" tabindex="0" ><i class="fa fa-plus-square attachments-icon"></i>Click to add attachments</span>
                  </label>
          </div>

          <div className="row start-xs">
            <div class="col-xs-7">
              <h3>STEPS TO REPRODUCE</h3>
            </div>
          </div>
          <DescriptionBox />
          </div>
       
      </div>
    );
  }
}

export default Description;