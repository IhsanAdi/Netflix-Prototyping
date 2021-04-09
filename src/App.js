import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Browse from './components/Browse';
import TVSeries from './components/TVSeries';
import Film from './components/Film';

class App extends Component {
 render(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/browse" component={Browse} exact/>
      <Route path="/tv-series" component={TVSeries} exact/>
      <Route path="/film" component={Film} exact/>
      {/* <Route path="/movieInfo" component={MovieInfo} exact /> */}
      {/* <Route></Route> */}
    </Switch>
    </BrowserRouter>
  );
 }
}

export default App;
