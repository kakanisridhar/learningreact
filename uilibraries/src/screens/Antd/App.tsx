import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout } from 'antd';
import routes, { renderRoutes } from './Routes';
import AppNav from './shared/AppNav';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo" />
          <AppNav />
        </Header>
        <Content style={{ padding: '0 50px' }}>{renderRoutes(routes)}</Content>
        <Footer style={{ textAlign: 'center' }}>Mridasoft</Footer>
      </Layout>
    </Router>
  );
}

export default App;
