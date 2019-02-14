import React from 'react';
import { Route} from 'react-router-dom';
import About from './components/About';
import Karis from './components/Karis';
import Nlightn from './components/NlightN';
import Capital from './components/Capital';

const BaseRouter = () =>(
  <div className="routes-div">
    <Route exact path='/' component={About}/>{" "}

  </div>

);

export default BaseRouter;
