import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Karis extends Component {

  render(){
    return(
      <div className="karis-container">
        <Row>
          <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
            <h1 style={{padding:"0", margin:"0" }}>Karis Toys </h1>
          </Col>
          <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
            <h3>June 2018 - November 2018</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
            <h3 style={{padding:"0", margin:"0" }}>Full-Stack Developer </h3>
          </Col>
          <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
            <h4>Team Size: 1</h4>
          </Col>
        </Row>

        <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
          <Col xs={20} sm={12} md={10} lg={6} style={{}}>
            <img src="/Karis.png" style={{width:'9rem', height:"9rem"}} alt="csumb Image"/>
          </Col>

          <Col xs={20} sm={12} md={8} lg={6} style={{}}>
            <div><h3>Websites:</h3></div>
            <div onClick={()=>window.open('http://karistoys.herokuapp.com')}
                style={{color:"#1e90ff", marginBottom:"5px"}}>
                <Icon type="desktop"/> Karis Toys websites
            </div>
            <div onClick={()=>window.open('https://github.com/sixtosMateo/transactionApp')}
                style={{color:"#1e90ff", marginBottom:"5px"}}>
                <Icon type="github"/> GitHub Repo
            </div>
          </Col>

          <Col xs={20} sm={12} md={8} lg={6} style={{}}>
            <div><h3>Address:</h3></div>
            <div><Icon type="shop" /> 548 East Alisal Street </div>
            <div>Salinas, California 93905</div>
          </Col>

          <Col xs={20} sm={12} md={8} lg={6} style={{}}>
            <div><h3>Open Hours:</h3></div>
            <div>Monday - Sunday: </div>
            <div>10:00pm-6:00pm PST</div>
            <div>Holidays Hours may change</div>
            </Col>
        </Row>

        <Row style={{marginTop:"20px"}}>
          <Col xs={20} sm={12} md={8} lg={8} style={{marginTop:"5px"}}>
            <h3 style={{margin:"0"}}>Duties:</h3>
            <div>BackEnd</div>
            <div>FrontEnd</div>
            <div>Database</div>
            <div>Deployment </div>
          </Col>

          <Col xs={20} sm={12} md={8} lg={8} style={{marginTop:"5px"}}>
          <h3 style={{margin:"0"}}>Tools/Languages:</h3>
          <div>Python</div>
          <div>JavaScript</div>
          <div>Nginx</div>
          <div>Gunicorn</div>
          <div>Digital Ocean</div>
          </Col>

          <Col xs={20} sm={12} md={8} lg={8} style={{marginTop:"5px"}}>
          <h3 style={{margin:"0"}}>Links:</h3>
          <div onClick={()=>window.open('https://github.com/sixtosMateo/transactionApp')}
              style={{color:"#1e90ff"}}>
              <Icon type="github"/> Github Repo
          </div>
          <div style={{color:"#1e90ff"}}><Icon type="linkedin" onClick={()=>window.open('https://www.linkedin.com/in/sixtosmateo/')}/> in/sixtosmateo</div>
          <div style={{color:"#1e90ff"}}><Icon type="twitter" onClick={()=>window.open('https://twitter.com/SixtosMateo')}/> @SixtosMateo</div>

          </Col>
        </Row>
        <p style={{marginTop:"20px"}}>
        Description:
          <ul>
            <li>
              Designed relational database with Lucidchart, Django Migrations and MySQL Workbench to monitor inventory
              and archive finance records, saving company ~$50,000 annually from data administration.
            </li>
            <li>
              Engineered RESTful API endpoints in Python, Django-Rest-Framework and Django Forms to use AJAX calls
              which optimized process for posting new inventory items by 25%.
            </li>
            <li>
              Validated credentials on server side using Python, Django Authentication System and crsf_token to control
              user interactions with CRUD operations in order to maintain close to 100% data integrity.
            </li>
            <li>
              Defined specific reporting metrics for internal administration performance using Plotly, Django Serializers and
              AJAX calls, saving 6.9% percent of revenue each year spent on 3rd party services.
            </li>
            <li>
              Used DigitalOcean as cloud service provider to host app by configuring Ubuntu 18.04 server, Nginx, Unicorn
              and Postgres database to reduce cost to 5$ per month for 1GB memory and 25GB disk storage.
            </li>
          </ul>

        </p>

      </div>
    )
  }
}

export default Karis;
