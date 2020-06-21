import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  LogoutOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import fire from "../../config/fire";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = (props) => {

  const [colapsed, setColapsed] = useState(false);
  const [email, setEmail] = useState("");

  const onCollapse = collapsed => {
    setColapsed(!colapsed);
  };

  const logout = () => {
    try {
        fire.auth().signOut();
    } catch (error) {
        console.log(error);
    }
  }

    fire.auth().onAuthStateChanged(user => {
      if (user) {
          setEmail(user.email);
      } else {
          props.history.push("/");
      }
    })

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={colapsed} onCollapse={onCollapse}>
          <div className="logo">
            <img src="icon.png" alt="bugTracker" height="60rem"/>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<ClockCircleOutlined />}>
              Timers
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
              Report
            </Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined />}>
              Ranking
            </Menu.Item>
            <Menu.Item key="9" onClick={() => {logout()}} icon={<LogoutOutlined />}>Logout</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User / {email}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Pomodoro Tracker ©2020 Created by Fuad Herac</Footer>
        </Layout>
      </Layout>
    );
  }


export default Dashboard;