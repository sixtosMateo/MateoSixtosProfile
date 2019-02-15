import React from 'react';
import { Route} from 'react-router-dom';
import About from './components/About';
import Karis from './components/Karis';
import Nlightn from './components/NlightN';
import Capital from './components/Capital';
import BusinessDock from './components/Business';
import Ecommerce from './components/Ecommerce';
import Tomorrow from './components/Tomorrow';
import Fashion from './components/Fashion';
import Geocash from './components/Geocash';
import First from './components/First';

const BaseRouter = () =>(
  <div className="routes-div">
    <Route exact path='/' component={About}/>{" "}
    <Route exact path='/karis' component={Karis}/>{" "}
    <Route exact path='/nlightn' component={Nlightn}/>{" "}
    <Route exact path='/capital' component={Capital}/>{" "}
    <Route exact path='/ecommerce' component={Ecommerce}/>{" "}
    <Route exact path='/businessDock' component={BusinessDock}/>{" "}
    <Route exact path='/tomorrow' component={Tomorrow}/>{" "}
    <Route exact path='/fashion' component={Fashion}/>{" "}
    <Route exact path='/geocash' component={Geocash}/>{" "}
    <Route exact path='/first' component={First}/>{" "}
  </div>

);

export default BaseRouter;
