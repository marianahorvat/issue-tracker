import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <div>  
              <Nav className="App-header" />
              
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


