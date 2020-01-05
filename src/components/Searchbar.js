import React, { Component} from 'react';
import './Searchbar.css';
import '../font-awesome/css/font-awesome.css';


class Searchbar extends Component {

  render() {
    return (
      <div className="Searchbar">

<div class='search-container'>
  <div class='row'>
    <div class='col-md-12'>
      <h3>Briefly describe your issue or service request</h3>
      
    </div>
  </div>
  <div class='row center-xs'>
    <div class='col-md-6'>
      <div class='search-box'>
        <form class='search-form'>
          <input class='form-control' placeholder='How can we help you?' type='text'/>
          <button className='btn btn-link search-btn'>
          <span className="search-icon"><i className="fa fa-search" ></i></span>
           </button>
        </form>
      </div>
    </div>
  </div>
</div>

        

      </div>
    );
  }
}

export default Searchbar;