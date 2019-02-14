import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Karis extends Component {

  render(){
    return(
      <div className="karis-container">
        <Row  style={{border:"solid 1px"}}>
          <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left",
                                border:"solid 1px"}}>
            <h1 style={{padding:"0", margin:"0" }}>Karis Toys </h1>
          </Col>
          <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right",
                                border:"solid 1px"}}>
            <h2>June 2018 - November 2018</h2>
          </Col>
        </Row>

        <Row  style={{border:"solid 1px"}}>
          <Col xs={20} sm={12} md={10} lg={6} style={{border:"solid 1px"}}>
            <img src="/Karis.png" style={{width:'9rem', height:"9rem"}} alt="csumb Image"/>
          </Col>

          <Col xs={20} sm={12} md={10} lg={6} style={{border:"solid 1px"}}>
            <div>Websites:</div>
            <div onClick={()=>window.open('http://karistoys.herokuapp.com')}
                style={{color:"#1e90ff", marginBottom:"5px"}}>
                <Icon type="desktop"/> Karis Toys websites
            </div>
            <div onClick={()=>window.open('https://github.com/sixtosMateo/transactionApp')}
                style={{color:"#1e90ff", marginBottom:"5px"}}>
                <Icon type="github"/> GitHub Repo
            </div>
          </Col>

          <Col xs={20} sm={12} md={6} lg={6} style={{border:"solid 1px"}}>
            <div>Address:</div>
            <div><Icon type="shop" /> 548 East Alisal Street </div>
            <div>Salinas, California 93905</div>
          </Col>

          <Col xs={20} sm={12} md={6} lg={6} style={{border:"solid 1px"}}>
            <div>Open Hours:</div>
            <div>Monday - Sunday: </div>
            <div>10:00pm-6:00pm PST</div>
            <div>Holidays Hours may change</div>
            </Col>
        </Row>

        <Row  style={{border:"solid 1px"}}>
          <Col xs={20} sm={14} md={8} lg={8} style={{border:"solid 1px"}}>
            <div>Duties:</div>
            <div>BackEnd</div>
            <div>FrontEnd</div>
            <div>Database</div>
          </Col>

          <Col xs={20} sm={14} md={8} lg={8} style={{border:"solid 1px"}}>
          <div>Tools/Languages:</div>
          <div>Python</div>
          <div>JavaScript</div>
          <div>Nginx</div>
          <div>Gunicorn</div>
          <div>Digital Ocean</div>
          </Col>

          <Col xs={20} sm={14} md={8} lg={8} style={{border:"solid 1px"}}>
          <div>Links:</div>
          <div onClick={()=>window.open('https://github.com/sixtosMateo/transactionApp')}
              style={{color:"#1e90ff"}}>
              <Icon type="github"/> Github Repo
          </div>
          <div style={{color:"#1e90ff"}}><Icon type="linkedin" onClick={()=>window.open('https://www.linkedin.com/in/sixtosmateo/')}/> in/sixtosmateo</div>
          <div style={{color:"#1e90ff"}}><Icon type="twitter" onClick={()=>window.open('https://twitter.com/SixtosMateo')}/> @SixtosMateo</div>

          </Col>
        </Row>
      </div>
    )
  }
}

export default Karis;
