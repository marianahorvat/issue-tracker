import React, { Component} from 'react';
// import './NewIssue.css';
import Title from '../components/NewIssue/Title';
import Description from '../components/NewIssue/Description';
import Details from '../components/NewIssue/Details';
import Save from '../components/NewIssue/Save';

class NewIssue extends Component {

  render() {
    return (
      <div className="NewIssue">
        
        <section id="page" class="title">
          <div class="container">
            <div class="row center-xs center-sm center-md center-lg">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2><span class="primary-text">Add</span> New Issue</h2>
                <p>Please use this form to submit a new issue</p>
                <form>
                  <Title />
                  <Description />
                  <Details />
                  <Save />
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default NewIssue;