import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class BusinessDock extends Component {

  render(){
    return(
      <div className="businessDock-container">
      <Row>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h1 style={{padding:"0", margin:"0" }}>BusinessDock</h1>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>December 2018 - present</h3>
        </Col>
      </Row>

      <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
        <h2>Screen Shots:</h2>
        <Col xs={20} sm={12} md={8} lg={8} style={{textAlign:"center"}}>
          <img src="/business1.png" style={{width:'10rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={10} md={8} lg={8} style={{textAlign:"center"}}>
          <img src="/business2.png" style={{width:'10rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={10} md={8} lg={8} style={{textAlign:"center"}}>
          <img src="/business3.png" style={{width:'10rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
      </Row>

      <Row style={{ marginTop:"20px"}}>
        <Col xs={22} sm={12} md={12} lg={12} style={{textAlign:"center"}}>
          <h3>Websites:</h3>
          <div onClick={()=>window.open('https://github.com/sixtosMateo/BusinessDock')}
              style={{color:"#1e90ff"}}>
              <Icon type="github"/> Github Repo
          </div>
          <div
              style={{color:"#1e90ff", marginBottom:"5px"}}>
              <Icon type="desktop"/> TBD
          </div>
          <div style={{color:"#1e90ff"}}>
              <Icon type="linkedin"
                    onClick={()=>window.open('https://ant.design/')}/>
                Ant Design
          </div>

          <div style={{color:"#1e90ff"}}>
              <Icon type="linkedin"
                    onClick={()=>window.open('https://www.linkedin.com/in/sixtosmateo/')}/>
                sixtosmateo
          </div>


        </Col>

        <Col xs={22} sm={12} md={12} lg={12}  style={{textAlign:"center"}}>
          <h3>Tools/Languages:</h3>
          <div>React: Frontend</div>
          <div>AntDesign: Layout</div>
          <div>Django: Backend</div>
          <div>Django-Rest-Framework: Endpoints</div>

        </Col>
      </Row>

      <Row style={{ marginTop:"20px"}}>
        <h2>Summary:</h2>
        <p>This project is an upgrade version of Karis Toys TransacionApp. I am
        incorporating React for the frontend, Django for the backend and Django
        Rest Framework for RESTful API endpoints. The vision of this project is
        to implement Docker to provide different environments for each potential
        client. Another improvement I would like to implement is using Memcached
        to improve data visualization performance.</p>

        <p>For the most part the functionality will remain the same. Some of
        its key points are the following:</p>
        <ul>
          <li>
            Defined specific reporting metrics for internal administration
            performance using Plotly, Django Serializers and AJAX calls
          </li>
          <li>
            Validated credentials on server side using Python, Django
            Authentication System and crsf_token to control user interactions
            with CRUD operations.
          </li>
          <li>
            Designed relational database with Lucidchart,
            Django Migrations and MySQL Workbench to monitor inventory and
            archive finance records.
          </li>
          <li>
            Engineered RESTful API endpoints in Python, Django-Rest-Framework
            and Django Forms to use AJAX calls which optimized process for
            posting new inventory items.
          </li>

        </ul>
      </Row>


      </div>
    )
  }
}

export default BusinessDock;
