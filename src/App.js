import './App.css';
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home/containers';
import Content from './Content/containers';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Route path="/" exact component={Home} />
        <Route path="/content" component={Content} />
      </HashRouter>
    );
  }
}

export default App;
