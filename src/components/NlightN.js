import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Nlightn extends Component {

  render(){
    return(
      <div className="nlightn-container">
      <Row>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h1 style={{padding:"0", margin:"0" }}>NlightN Technologies </h1>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>December 2017 - April 2018</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h3 style={{padding:"0", margin:"0" }}>Full-Stack Developer Internship</h3>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h4>Team Size: 6</h4>
        </Col>
      </Row>

      <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
        <Col xs={20} sm={12} md={10} lg={6} style={{}}>
          <img src="/nlightn.png" style={{width:'8rem', height:"8rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <div><h3>Websites:</h3></div>
          <div onClick={()=>window.open('http://www.nlightntech.com/')}
              style={{color:"#1e90ff", marginBottom:"5px"}}>
              <Icon type="desktop"/> nlightn website
          </div>
          <div onClick={()=>window.open('https://github.com/sixtosMateo/')}
              style={{color:"#1e90ff", marginBottom:"5px"}}>
              <Icon type="github"/> N/A GitHub
          </div>
        </Col>
        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <div><h3>Address:</h3></div>
          <div><Icon type="shop" />TBH </div>
          <div>Fremont, CA 94539</div>
        </Col>
        <Col xs={20} sm={8} md={8} lg={6} style={{}}>
          <div><h3>Open Hours:</h3></div>
          <div>Monday - Friday: </div>
          <div>TBA</div>
          <div>Holidays Hours may change</div>
          </Col>
      </Row>


      <Row style={{marginTop:"20px"}}>
        <Col xs={20} sm={12} md={8} lg={8} style={{marginTop:"5px"}}>
          <h3 style={{margin:"0"}}>Duties:</h3>
          <div>BackEnd</div>
          <div>FrontEnd</div>
          <div>Database</div>
        </Col>

        <Col xs={20} sm={12} md={8} lg={8} style={{marginTop:"5px"}}>
          <h3 style={{margin:"0"}}>Tools/Languages:</h3>
          <div>Python</div>
          <div>JavaScript</div>
          <div>AWS</div>
          <div>Django</div>
        </Col>

        <Col xs={20} sm={12} md={8} lg={8} style={{marginTop:"5px"}}>
        <h3 style={{margin:"0"}}>Links:</h3>
        <div onClick={()=>window.open('https://github.com/sixtosMateo/')}
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
              Created metric-combination intake process with dynamic reporting date ranges using Python, Django Forms,
              HTTP Request and Django ORM to provide real-time data on company KPIs.
            </li>
            <li>
              Configured weekly, monthly or annual targets for each metric-combination by implementing Django Forms,
              Ginger syntax, HTTP Request and Django ORM to optimize data entry process by 6X.
            </li>
            <li>
              Implemented notification features using Python, Django ORM, HTTP Request and Django Forms to notify
              stakeholders in real-time about metric performance.
            </li>
            <li>
              Collaborated with 3 engineers using GitLab for version control and Jira for task management to support agile
              development process and keep standups to less than 15 minutes.
            </li>
          </ul>
        </p>
      </div>
    )
  }
}

export default Nlightn;
