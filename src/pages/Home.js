import React, { Component} from 'react';
import './Home.css';
import Showcase from '../components/Showcase';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Showcase />

      </div>
    );
  }
}

export default Home;