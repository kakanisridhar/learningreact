import React from 'react';
import './designer.css';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

export default function ScreenDesigner() {
  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        Divs will come here
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          This is the area where we drop
        </Content>
      </Layout>
      <Sider width={200} className="site-layout-background">
        inputs will come here
      </Sider>
    </Layout>
  );
}
