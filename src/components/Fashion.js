import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Fashion extends Component {

  render(){
    return(
      <div className="tomorrow-container">
      <Row>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h1 style={{padding:"0", margin:"0" }}>Fashion Hackathon</h1>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3> September 2017</h3>
        </Col>
      </Row>
      <Row style={{ width:"80%", marginLeft:"20px"}}>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h3 style={{padding:"0", margin:"0" }}>Th3ms</h3>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>San Francisco, CA</h3>
        </Col>
      </Row>

      <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
        <Col xs={24} sm={14} md={8} lg={6} style={{}}>
          <img src="/thems.png" style={{width:'10rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <h3>Companies Apis:</h3>
          <div>Volare</div>
          <div>cloud4wi</div>
        </Col>

        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <h3>Tools:</h3>
          <div>MySQL</div>
          <div>Ionic</div>
          <div>cloud4wi API</div>
        </Col>
        <Col xs={20} sm={12} md={8} lg={6} style={{}}>
          <h3>Team Size:</h3>
          <div>3 Members</div>
        </Col>

      </Row>

      <Row  style={{marginTop:"10px", width:"80%", marginLeft:"20px"}}>
        <h2>Description:</h2>
        <p> In less than 48 hours, our team developed a web application that
        innovates the utilization of Wi-Fi to improve customer service.</p>
        <p>
        <ul>
          <li>Developed a web application and integrated Volare’s cloud4wi API to personalize customers experience in retail.</li>
          <li>Users would participate in an image based survey, on the Wi-Fi network, in exchange for free internet.</li>
          <li>Th3ms is deployed in Heroku allowing associates to view customers input.</li>
        </ul>








        </p>

      </Row>


      </div>
    )
  }
}

export default Fashion;
