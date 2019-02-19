import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Geocash extends Component {

  render(){
    return(
      <div className="geocash-container">
      <Row>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h1 style={{padding:"0", margin:"0" }}>API World Hackathon</h1>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>September 2017</h3>
        </Col>
      </Row>
      <Row style={{ width:"80%", marginLeft:"20px"}}>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h3 style={{padding:"0", margin:"0" }}>GeoCash</h3>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>Palo Alto, CA</h3>
        </Col>
      </Row>

      <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
        <Col xs={24} sm={14} md={8} lg={6} style={{}}>
          <img src="/geocash.png" style={{width:'10rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <h3>Companies Apis:</h3>
          <div>Citi FinTech </div>
          <div>HyperTrack</div>
          <div>Back4App</div>
        </Col>

        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <h3>Tools:</h3>
          <div>Ionic</div>
          <div>Citi FinTech API</div>
          <div>HyperTrack API</div>
          <div>Back4App API</div>

        </Col>
        <Col xs={20} sm={12} md={8} lg={6} style={{}}>
          <h3>Team Size:</h3>
          <div>4 Members</div>
        </Col>

      </Row>

      <Row  style={{marginTop:"10px", width:"80%", marginLeft:"20px"}}>
        <h2>Description:</h2>
        <p> In less than 48 hours, our team developed a web application that
        helps users to monitor their finances in real time.</p>
        <p>
        <ul>
          <li>Integrated HyperTrack API to keep track of user’s location and send available funds notifications.</li>
          <li>Used Citi FinTech API to access and display (angular) their customers data in the app .</li>
          <li>Users input data is stored in a Back4App database.</li>
        </ul>

        </p>

      </Row>


      </div>
    )
  }
}

export default Geocash;
