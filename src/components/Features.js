import React, { Component} from 'react';
import './Features.css';
import Searchbar from './Searchbar';

class Features extends Component {

  render() {
    return (
      <div className="Features">

        <section id="features">
          <div class="row center-xs center-sm center-md center-lg">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             <Searchbar />

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;