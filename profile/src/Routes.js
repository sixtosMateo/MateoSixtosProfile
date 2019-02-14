import React from 'react';
import { Route} from 'react-router-dom';
import About from './components/About';
import Karis from './components/Karis';

const BaseRouter = () =>(
  <div className="routes-div">
    <Route exact path='/' component={Karis}/>{" "}
  </div>

);

export default BaseRouter;
