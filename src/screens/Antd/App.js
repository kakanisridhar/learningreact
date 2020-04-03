import React, { Component } from "react";
import { Layout, Menu } from "antd";

import { Router, Link } from "@reach/router";
import { hot } from "react-hot-loader/root";

const { Header, Content, Footer, Sider } = Layout;

const App = ({ children }) => (
  <Layout>
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1">
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <span className="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <span className="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <span className="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <span className="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <Router>
            <Home path="/" />
            <Dashboard path="dashboard" />
          </Router>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Mridasoft</Footer>
    </Layout>
  </Layout>
);

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

export default hot(App);
