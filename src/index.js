import React from 'react';
import ReactDOM from 'react-dom';



import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import NewIssue from './pages/NewIssue';
import Requests from './pages/Requests';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <BrowserRouter>
      <div>  
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
          <Route path="home" component={Home} />
          <Route path="knowledge" component={Knowledge} />
          <Route path="new-issue" component={NewIssue} />
          <Route path="requests" component={Requests} />
          <Route path="/" component={App} />
      </div>
   </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
