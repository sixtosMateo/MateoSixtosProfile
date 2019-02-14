import React from 'react';
import { Route} from 'react-router-dom';
import About from './components/About';
import Karis from './components/Karis';
import Nlightn from './components/NlightN';

const BaseRouter = () =>(
  <div className="routes-div">
    <Route exact path='/' component={Nlightn}/>{" "}

  </div>

);

export default BaseRouter;
