import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class First extends Component {

  render(){
    return(
      <div className="tomorrow-container">
      <Row>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h1 style={{padding:"0", margin:"0" }}>API First Hackathon</h1>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3> September 2017</h3>
        </Col>
      </Row>
      <Row style={{ width:"80%", marginLeft:"20px"}}>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h3 style={{padding:"0", margin:"0" }}>Juxtaposr</h3>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>San Francisco, CA</h3>
        </Col>
      </Row>

      <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
        <Col xs={24} sm={14} md={8} lg={6} style={{}}>
          <img src="/first.png" style={{width:'10rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <h3>Companies Apis:</h3>
          <div>IBM</div>
          <div>Bluemix</div>
        </Col>

        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <h3>Tools:</h3>
          <div>MySQL</div>
          <div>React</div>
          <div>IBM API</div>
        </Col>
        <Col xs={20} sm={12} md={8} lg={6} style={{}}>
          <h3>Team Size:</h3>
          <div>6 Members</div>
        </Col>

      </Row>

      <Row  style={{marginTop:"10px", width:"80%", marginLeft:"20px"}}>
        <h2>Description:</h2>
        <p> In less than 48 hours, our team developed a web application that
        innovates the process that allows user to complete surveys about
        certain topics in a x and y-axis graph</p>
        <p>
        <ul>
          <li>Utilized React to create a drag and drop function to obtain coordinates of icon’s location from the graph.</li>
          <li>Integrated IBM LoopBack and Bluemix framework to create a REST API and deploy our web application on the cloud.</li>
        </ul>








        </p>

      </Row>


      </div>
    )
  }
}

export default First;
