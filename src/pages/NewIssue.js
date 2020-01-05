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
        <Title />
        <Description />
        <Details />
        <Save />
      </div>
    );
  }
}

export default NewIssue;