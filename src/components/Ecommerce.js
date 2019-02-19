import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

class Ecommerce extends Component {

  render(){
    return(
      <div className="ecommerce-container">
      <Row>
        <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
          <h1 style={{padding:"0", margin:"0" }}>Phone E-commerce </h1>
        </Col>
        <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
          <h3>January 2019</h3>
        </Col>
      </Row>

      <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
        <h2>Screen Shots:</h2>
        <Col xs={20} sm={12} md={8} lg={8} style={{textAlign:"center"}}>
          <img src="/ecommerce1.png" style={{width:'10rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={10} md={8} lg={8} style={{textAlign:"center"}}>
          <img src="/ecommerce2.png" style={{width:'11rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
        <Col xs={20} sm={10} md={8} lg={8} style={{textAlign:"center"}}>
          <img src="/ecommerce3.png" style={{width:'10rem', height:"10rem"}} alt="csumb Image"/>
        </Col>
      </Row>

      <Row style={{ marginTop:"20px"}}>
        <Col xs={22} sm={12} md={12} lg={12} style={{textAlign:"center"}}>
          <h3>Websites:</h3>
          <div onClick={()=>window.open('https://github.com/sixtosMateo/e-commerceWebsite')}
              style={{color:"#1e90ff"}}>
              <Icon type="github"/> Github Repo
          </div>
          <div onClick={()=>window.open('https://phonecommerce.netlify.com/')}
              style={{color:"#1e90ff", marginBottom:"5px"}}>
              <Icon type="desktop"/> Website
          </div>
          <div style={{color:"#1e90ff"}}>
              <Icon type="linkedin"
                    onClick={()=>window.open('https://www.linkedin.com/in/sixtosmateo/')}/>
                sixtosmateo
          </div>
          <div onClick={()=>window.open('https://www.youtube.com/watch?time_continue=1724&v=wPQ1-33teR4')}
              style={{color:"#1e90ff", marginBottom:"5px"}}>
              <Icon type="youtube"/> Resources
          </div>

        </Col>

        <Col xs={22} sm={12} md={12} lg={12}  style={{textAlign:"center"}}>
          <h3>Tools/Languages:</h3>
          <div>React</div>
          <div>Javascript</div>
          <div>PayPal API</div>
          <div>CSS</div>
          <div>Styled Components</div>
        </Col>
      </Row>

      <Row style={{ marginTop:"20px"}}>
        <h2>Summary:</h2>
        <p>This project is a single page web-application using React Framework which allows users to purchase phones online. </p>
        <ul>
          <li>
            Implemented React Pay-pal express-checkout package that allows clients to complete a transaction.
          </li>
          <li>
            Configured Bootstrap to improve styling for icons and the application layout.
          </li>
          <li>
            Developed styled components for composition purposes by defining css attributes and behavior.
          </li>

        </ul>
      </Row>


      </div>
    )
  }
}

export default Ecommerce;
