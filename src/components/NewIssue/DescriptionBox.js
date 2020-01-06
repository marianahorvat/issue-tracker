import React, { Component} from 'react';
import './Description.css';
// import '../font-awesome/css/font-awesome.css';


class DescriptionBox extends Component {

  render() {
    return (

          <div className="row start-xs rectangle-17">
            <div class="col-xs-12">
            <select>
              <option value="volvo">Font</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select>
              <option value="volvo">Size</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <button className="btn-descr" type="button" name="button"><i class="fa fa-bold"></i></button>
            <button className="btn-descr" type="button" name="button"><i class="fa fa-italic"></i></button>
            <button className="btn-descr" type="button" name="button"><i class="fa fa-underline"></i></button>
            <button className="btn-descr" type="button" name="button"><i class="fa fa-strikethrough"></i></button>
            <button className="btn-descr" type="button" name="button"><i class="fa fa-list-ol"></i></button>
            <button className="btn-descr" type="button" name="button"><i class="fa fa-list-ul"></i></button>
            <hr></hr>
            <div class="col-xs-12">
            <textarea name="Text1" className="defect-description" cols="40" rows="5"></textarea>
            </div>
            </div>
            
          </div>
    );
  }
}

export default DescriptionBox;