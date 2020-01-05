import React, { Component} from 'react';
import './Home.css';
import Showcase from '../components/Showcase';
import Features from '../components/Features';
import Footer from '../components/Footer';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Showcase />
        <Features />
        <Footer />
      </div>
    );
  }
}

export default Home;