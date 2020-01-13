import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/containers';
import Content from './Content/containers';

class App extends Component {
  render() {
    return (
      <Router>
          <div id="Routes">
            <Route path="/" exact component={Home} />
            <Route path="/content" component={Content} />
          </div>
        </Router>
    );
  }
}

export default App;
