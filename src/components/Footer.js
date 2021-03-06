import React, { Component} from 'react';
import './Footer.css';
import '../font-awesome/css/font-awesome.css';


class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <footer id="main-footer">
          <div class="container">
            <div class="row center-xs center-sm center-md center-lg">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Copyright &copy; 2020 | iTracker</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;