import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';


class About extends Component {

  render(){
    return(
      <div className="about-container">
        <Row>
          <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
            <h1 style={{padding:"0", margin:"0" }}>Mateo Sixtos</h1>
          </Col>
          <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
            <h3>Full-Stack Developer</h3>
          </Col>
        </Row>

        <Row  style={{marginTop:"20px", background:"#F5F5F5"}}>
          <Col xs={20} sm={12} md={8} lg={8} style={{}}>
            <img src="/profileImage.png" style={{width:'9rem', height:"9rem"}} alt="csumb Image"/>
          </Col>

          <Col xs={20} sm={12} md={8} lg={8} style={{}}>
            <div className="social-media" style={{}}>
              <div><h3 style={{}}>Social Media: </h3></div>
              <div onClick={()=>window.open('https://www.linkedin.com/in/sixtosmateo/')}><Icon type="linkedin"/> in/sixtosmateo</div>
              <div onClick={()=>window.open('https://github.com/sixtosMateo/')}><Icon type="github" /> sixtosMateo</div>
              <div onClick={()=>window.open('https://twitter.com/SixtosMateo')}><Icon type="twitter" /> @Sixtosmateo</div>
            </div>
          </Col>

          <Col xs={20} sm={12} md={8} lg={8} style={{}}>
            <div className="contact-info" style={{}}>
              <div><h3 style={{}}>Contact Info: </h3></div>
              <div><Icon type="mail" />  sixtosmateo@gmail.com</div>
              <div><Icon type="mail" />  mateosixtos@gmail.com</div>
              <div><Icon type="phone"/>  (831)585-0879</div>
            </div>
          </Col>
        </Row>

        <div style={{width:"90%", margin:"20px"}}>
          <h3>Bio</h3>
          <p style={{textAlign:"center"}}>
            Hi, my name is Mateo Sixtos. I am a Full-Stack Developer who enjoys developing responsive web-applications that innovates the process of managing business operations for local vendors.
          </p>
        </div>

        <Row style={{background:"#F5F5F5"}}>
          <h2 style={{padding:"0", margin:"0" }}>Education:</h2>

          <Col xs={22} sm={12} md={8} lg={8} style={{}}>
            <img src="/csumb.png" style={{width:'9rem', height:"9rem"}} alt="csumb Image"/>
          </Col>

          <Col xs={22} sm={12} md={16} lg={16}  style={{ }}>

              <Col md={12} lg={12} style={{ textAlign: "left", }}>
                <h3 style={{ }}>California State University Monterey Bay, Seaside, CA</h3>
              </Col>
              <Col  md={12} lg={12} style={{ textAlign: "right", }}>
                <h4>Graduation: Dec. 2016</h4>
              </Col>
          </Col>

          <Row style={{}}>
            <Col xs={22} sm={24} md={16} lg={16}  style={{ }}>
              <Col md={12} lg={12} style={{}}>
                  <h3 style={{}}>Hartnell College, Salinas, CA</h3>
              </Col>

              <Col md={12} lg={12} style={{textAlign: "right",}}>

                <h4>Graduation: Dec. 2014</h4>

              </Col>


            </Col>
            <Row style={{}}>
              <Col xs={24} sm={20} md={16} lg={16}  style={{ }}>
              <div><h4 style={{padding:"0", margin:"10px" }}> Major: Computer Science and Information Technology</h4></div>
              </Col>
            </Row>
          </Row>
        </Row>

        <div style={{ margin:"20px", textAlign:"center"}}>
          <p>
            CSIT-In-3 Program: Member of highly selective cohort of undergraduate students committed to graduate with a Bachelor’s of Science degree in Computer Science and Information Technology in 3 years
          </p>
        </div>

      </div>
    )
  }
}


// <p>
//   Major: Computer Science and Information Technology
//   Concentration: Software Engineering
//
// </p>
// <Col xs={22} sm={20} md={12} lg={12} style={{ textAlign: "left"}}>
//   <h3 style={{padding:"0", margin:"0" }}>Hartnell College, Salinas, CA</h3>
// </Col>
// <Col xs={22} sm={20} md={12} lg={12}  style={{ textAlign: "right"}}>
//   <h4>Graduation: Dec. 2014</h4>
// </Col>

export default About ;
