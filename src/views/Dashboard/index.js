import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  LogoutOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  BarChartOutlined,
  HomeOutlined
} from '@ant-design/icons';
import fire from "../../config/fire";
import Logo from '../../components/Logo';
import Timers from '../../components/Timers/index';
import Report from '../../components/Report/index';
import Ranking from '../../components/Ranking/index';
import Homepage from '../Homepage/index';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = (props) => {

  const [colapsed, setColapsed] = useState(false);
  const [email, setEmail] = useState('');
  const [content, setContent] = useState(<Homepage/>);

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
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={colapsed} onCollapse={onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => {setContent(<Homepage />)}}>
                Homepage
              </Menu.Item>
              <Menu.Item key="2" icon={<ClockCircleOutlined />} onClick={() => {setContent(<Timers email={email}/>)}}>
                Timers
              </Menu.Item>
              <Menu.Item key="3" icon={<InfoCircleOutlined />} onClick={() => {setContent(<Report email={email}/>)}}>
                Report
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />} onClick={() => {setContent(<Ranking />)}}>
                Ranking
              </Menu.Item>
              <Menu.Item key="5" onClick={() => {logout()}} icon={<LogoutOutlined />}>Logout</Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}><Logo/></Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User / {email}</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 0, minHeight: 360 }}>
                {content}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Pomodoro Tracker ©2020 Created by Fuad Herac</Footer>
          </Layout>
        </Layout>
      </>
    );
  }

export default Dashboard;