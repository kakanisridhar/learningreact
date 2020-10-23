import React from 'react';
import { Row, Col } from 'antd';

export default function ScreenDesigner() {
  return (
    <Row style={{ height: '100%' }}>
      <Col>This should have side bar with controls names</Col>
      <Col>This should have a drop area created by grid</Col>
      <Col>This should have right accordion</Col>
    </Row>
  );
}
