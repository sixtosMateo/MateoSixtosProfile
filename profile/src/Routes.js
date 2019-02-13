import React from 'react';
import { Route} from 'react-router-dom';
import About from './components/About';

const BaseRouter = () =>(
  <div className="routes-div">
    <Route exact path='/' component={About}/>{" "}
  </div>

);

export default BaseRouter;
