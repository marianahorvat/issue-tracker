import React, { Component} from 'react';
import './Home.css';
import Showcase from '../components/Showcase';
import Features from '../components/Features';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Showcase />
        <Features />

      </div>
    );
  }
}

export default Home;