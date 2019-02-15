import React from 'react';
import {
  Layout, Menu, Breadcrumb, Icon, Row, Col
} from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;


class CustomLayout extends React.Component {
  render() {
    return (
      <Layout style={{}}>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">About Me</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Karis">Work</Link></Menu.Item>
            <Menu.Item key="3">Resume</Menu.Item>
          </Menu>
        </Header>

        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />Experiences</span>}>
                <Menu.Item key="1"><Link to="/karis">Karis Toys</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/nlightn">nLightn Technologies</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/capital">Capital Insurance Group</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />Projects</span>}>
                <Menu.Item key="5"><Link to="/ecommerce">Phone E-commerce</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/businessDock">BusinessDock</Link></Menu.Item>
                <Menu.Item key="7">Restaurant Menu App</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />Hackathons</span>}>
                <Menu.Item key="10"><Link to="/first">API First Hackathon</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/geocash">API World Hackathon</Link></Menu.Item>
                <Menu.Item key="12"><Link to="/fashion">Fashion Hackathon</Link></Menu.Item>
                <Menu.Item key="13"><Link to="/tomorrow">Hack Your Tomorrow</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>

            <Content style={{
              background: '#fff', padding: 15, margin: 0, minHeight: 280,
            }}
            >
              { this.props.children }
            </Content>
          </Layout>
        </Layout>


        <Footer style={{background:'#001529', padding: "10px", margin:"0"}}>

          <Row style={{width:"100%",  padding: "0", marginTop:"25px", textAlign:"center"}}>

            <Col xs={12} sm={10} md={6} lg={6}  style={{ height: "150px"}}>
              <div className="visitor-navigation" style={{color:"#C0C0C0"}}>
                <div><h3 style={{color:"#C0C0C0"}}>Navigate: </h3></div>
                <div><Link to="/">Overview</Link></div>
                <div><Link to="/">Demo</Link></div>
                <div><Link to="/">Clients</Link></div>
                <div><Link to="/">Developer</Link></div>
              </div>
            </Col>

            <Col xs={12} sm={10} md={6} lg={6}  style={{height: "150px"}}>
              <div className="social-media" style={{color:"#C0C0C0"}}>
                <div><h3 style={{color:"#C0C0C0"}}>Social Media: </h3></div>
                <div onClick={()=>window.open('https://www.linkedin.com/in/sixtosmateo/')}><Icon type="linkedin"/>  in/sixtosmateo</div>
                <div onClick={()=>window.open('https://github.com/sixtosMateo/')}><Icon type="github" />  github.com/sixtosMateo</div>
                <div onClick={()=>window.open('https://twitter.com/SixtosMateo')}><Icon type="twitter" />  twitter.com/SixtosMateo</div>
              </div>
            </Col>
            <Col xs={12} sm={10} md={6} lg={6}  style={{height: "150px"}}>
              <div className="contact-info" style={{color:"#C0C0C0"}}>
                <div><h3 style={{color:"#C0C0C0"}}>Contact Info: </h3></div>
                <div><Icon type="mail" />  sixtosmateo@gmail.com</div>
                <div><Icon type="mail" />  mateosixtos@gmail.com</div>
                <div><Icon type="phone"/>  (831)585-0879</div>
              </div>
            </Col>
            <Col xs={12} sm={10} md={6} lg={6}  style={{height: "150px"}}>
              <div className="contact-info" style={{color:"#C0C0C0"}}>
                <div><h3 style={{color:"#C0C0C0"}}>Education: </h3></div>
                <div className = "csumbImage">
                  <img src="/csumb.png" style={{width:'5rem', height:"5rem"}} alt="csumb Image"/>
                </div>
              </div>
            </Col>
          </Row>

        </Footer>
      </Layout>

    )
  }
}

// {<Breadcrumb style={{ margin: '16px 0' }}>}
  // {<Breadcrumb.Item>Home</Breadcrumb.Item>}
  // {<Breadcrumb.Item>List</Breadcrumb.Item>}
  // {<Breadcrumb.Item>App</Breadcrumb.Item>}
// {<Breadcrumb>}
export default CustomLayout;
