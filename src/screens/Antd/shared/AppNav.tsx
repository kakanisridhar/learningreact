import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function AppNav() {
  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="W">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="SND">
          <Link to="/sidenavdemo">Side Nav Demo</Link>
        </Menu.Item>
        <Menu.Item key="inp">
          <Link to="/inputs">Inputs</Link>
        </Menu.Item>
        <Menu.Item key="de">
          <Link to="/designer">Designer</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
