import React from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class CustomLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
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
                <Menu.Item key="1">Karis Toys</Menu.Item>
                <Menu.Item key="2">nLightn Technologies</Menu.Item>
                <Menu.Item key="3">Capital Insurance Group</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />Projects</span>}>
                <Menu.Item key="5">Phone E-commerce</Menu.Item>
                <Menu.Item key="6">BusinessDock</Menu.Item>
                <Menu.Item key="7">Restaurant Menu App</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />Hackathons</span>}>
                <Menu.Item key="10">API First Hackathon</Menu.Item>
                <Menu.Item key="11">API World Hackathon</Menu.Item>
                <Menu.Item key="12">Fashion Hackathon</Menu.Item>
                <Menu.Item key="13">Hack Your Tomorrow (2017</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            /*{Breadcrumb}*/
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
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
