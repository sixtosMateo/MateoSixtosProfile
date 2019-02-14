import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Tomorrow extends Component {

  render(){
    return(
      <div className="tomorrow-container">
      <Row>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h1 style={{padding:"0", margin:"0" }}>Hack Your Tomorow Hackathon</h1>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>October 2017</h3>
        </Col>
      </Row>
      <Row style={{ width:"80%", marginLeft:"20px"}}>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h3 style={{padding:"0", margin:"0" }}>SynCare</h3>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>San Francisco, CA</h3>
        </Col>
      </Row>

      <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
        <Col xs={24} sm={14} md={8} lg={6} style={{}}>
          <img src="/hackyourtomorrow.png" style={{width:'8.5rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <h3>Companies Apis:</h3>
          <div>U.S. Bank</div>
          <div>AARP </div>
          <div>Amazon Alexa </div>
        </Col>

        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <h3>Tools:</h3>
          <div>MySQL</div>
          <div>Ionic</div>
          <div>Alexa API</div>
        </Col>
        <Col xs={20} sm={12} md={8} lg={6} style={{}}>
          <h3>Team Size:</h3>
          <div>4 Members</div>
        </Col>

      </Row>

      <Row  style={{marginTop:"10px"}}>
        <h2>Description:</h2>
        <p> Our team developed a web application, in 48 hours, that facilitates
        caregivers to monitor their love ones’ finances by using sponsors APIs. </p>

        <p>
        <ul>
          <li>Utilized Ionic framework to create the UI and communicate with a MySQL Database</li>
          <li>Integrated a cloud-based, voice service (Alexa), and used its API to access the results based on the users request</li>
          <li>An email notification would send an unique URL link to the caregivers to cooperate in the individual expenses</li>
        </ul>




        </p>

      </Row>


      </div>
    )
  }
}

export default Tomorrow;
