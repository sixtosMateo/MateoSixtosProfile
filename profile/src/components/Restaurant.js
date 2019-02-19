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
      </div>
    )
  }
}

export default Restaurant;
