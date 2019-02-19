import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Restaurant extends Component {

  render(){
    return(
      <div className="restaurant-container">
        <Row>
          <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
            <h1 style={{padding:"0", margin:"0" }}>Restaurant Menu App</h1>
          </Col>
          <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
            <h3> September 2017</h3>
          </Col>

        </Row>

        <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
          <h2>No Screen Shots:</h2>
          <Col xs={20} sm={12} md={8} lg={8} style={{textAlign:"center"}}>
            <Icon type="frown" style={{fontSize: '40px'}}/>
          </Col>
        </Row>

        <Row style={{ marginTop:"20px"}}>
          <Col xs={22} sm={12} md={12} lg={12} style={{textAlign:"center"}}>
          <h3>Websites:</h3>
          <div onClick={()=>window.open('https://github.com/sixtosMateo/udacity-linux-conf-catalog')}
              style={{color:"#1e90ff"}}>
              <Icon type="github"/> Github Repo
          </div>
          <div
              style={{color:"#1e90ff", marginBottom:"5px"}}>
              <Icon type="desktop"/> N/A
          </div>
          <div style={{color:"#1e90ff"}}>
              <Icon type="linkedin"
                    onClick={()=>window.open('https://www.linkedin.com/in/sixtosmateo/')}/>
                sixtosmateo
          </div>


          </Col>

        <Col xs={22} sm={12} md={12} lg={12}  style={{textAlign:"center"}}>
          <h3>Tools/Languages:</h3>
          <div>Flask</div>
          <div>AWS</div>
          <div>Google OAuth API</div>
          <div>Facebook OAuth API</div>
          <div>SSH</div>
        </Col>

        </Row>

        <Row style={{ marginTop:"20px"}}>
          <h2>Summary:</h2>
          <p>This project is a Flask web-application which allows users to interact with the
          CRUD operations as they navigate through a list of restaurants and their menus. </p>
          <ul>
            <li>
              Implemented an Authentication System by using Google's and Facebook OAuth API.
            </li>
            <li>
              Configured a simple Linux Web Server with an Apache Server and deployed application using AWS services.
            </li>
            <li>
              Utilized Flask Jsonify library to create API endpoints to interact within our application.
            </li>

          </ul>
        </Row>

      </div>
    )
  }
}

export default Restaurant;
