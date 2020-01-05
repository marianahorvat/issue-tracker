import React, { Component} from 'react';
import './Services.css';
import '../font-awesome/css/font-awesome.css';


class Services extends Component {

  render() {
    return (
      <div className="Services">

        <div class="row center-xs ">

          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h4>Popular Services</h4>
            <ul>
              <li><i class="fa fa-check"></i>New Computer Request</li>
              <li><i class="fa fa-check"></i>New Loaner Request</li>
              <li><i class="fa fa-check"></i>Password Reset</li>
              <li><i class="fa fa-check"></i>Visitor Access Pass</li>
              <li><i class="fa fa-check"></i>New Business Cards</li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Useful Articles</h4>
              <ul>
              <li><i class="fa fa-check"></i>How to Call your Voice Mail</li>
              <li><i class="fa fa-check"></i>Zoom Troubleshooting</li>
              <li><i class="fa fa-check"></i>How to add new Email</li>
              <li><i class="fa fa-check"></i>Setup your new Password</li>
              <li><i class="fa fa-check"></i>Verify PIN</li>
            </ul>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <h4>Free Upgrades</h4>
                <ul>
              <li><i class="fa fa-check"></i>Fully Optimized</li>
              <li><i class="fa fa-check"></i>Free Suport</li>
              <li><i class="fa fa-check"></i>Free Upgrades</li>
              <li><i class="fa fa-check"></i>UpTime Guarantee</li>
              <li><i class="fa fa-check"></i>Multi User</li>
            </ul>
              </div>
                </div> 

      </div>
    );
  }
}

export default Services;