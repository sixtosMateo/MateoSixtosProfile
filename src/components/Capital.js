import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Capital extends Component {

  render(){
    return(
      <div className="capital-container">
        <Row>
          <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
            <h1 style={{padding:"0", margin:"0" }}>Capital Insurance Group </h1>
          </Col>
          <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
            <h3>October 2016 - December 2016</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
            <h3 style={{padding:"0", margin:"0" }}>Associate Software Engineer </h3>
          </Col>
          <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
            <h4>Team Size: 3</h4>
          </Col>
        </Row>

        <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
          <Col xs={20} sm={12} md={10} lg={6} style={{}}>
            <img src="/capital.png" style={{width:'6rem', height:"6rem"}} alt="csumb Image"/>
          </Col>

          <Col xs={20} sm={12} md={8} lg={6} style={{}}>
            <div><h3>Websites:</h3></div>
            <div onClick={()=>window.open('https://www.ciginsurance.com/')}
                style={{color:"#1e90ff", marginBottom:"5px"}}>
                <Icon type="desktop"/> CIG Website
            </div>
            <div onClick={()=>window.open('https://github.com/sixtosMateo')}
                style={{color:"#1e90ff", marginBottom:"5px"}}>
                <Icon type="github"/> N/A GitHub Repo
            </div>
          </Col>

          <Col xs={20} sm={12} md={8} lg={6} style={{}}>
            <div><h3>Address:</h3></div>
            <div><Icon type="shop" /> 2300 Garden Rd</div>
            <div> Monterey, CA 93940</div>
          </Col>

          <Col xs={20} sm={12} md={8} lg={6} style={{}}>
            <div><h3>Open Hours:</h3></div>
            <div>Monday - Friday: </div>
            <div>8:00pm-5:00pm PST</div>
            <div>Holidays Hours may change</div>
            </Col>
        </Row>

        <Row style={{marginTop:"20px"}}>
          <Col xs={20} sm={12} md={8} lg={8} style={{marginTop:"5px"}}>
            <h3 style={{margin:"0"}}>Duties:</h3>
            <div>CIG WCF services</div>
            <div>FrontEnd</div>
          </Col>

          <Col xs={20} sm={12} md={8} lg={8} style={{marginTop:"5px"}}>
            <h3 style={{margin:"0"}}>Tools/Languages:</h3>
            <div>Andoroid</div>
            <div>Java</div>
            <div>CSS</div>
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
              Upgraded to Android Studio 2.2 SDK and reduced navigation redundancy to improve ratings in Google Play
              Store from 3.5 to 3.6.
            </li>
            <li>
              Integrated map to pinpoint CIGs nearest offices with Google Maps API and CIG’s Testing service locations to
              encourage users to interact with application and increase number of downloads from clients.
            </li>
            <li>
              Developed self-service claim feature to migrate additional 5% of calls or emails to Android app with CIG W.F.C.
              Services, Soap Objects and HTTP request.
            </li>

          </ul>

        </p>

      </div>
    )
  }
}

export default Capital;
