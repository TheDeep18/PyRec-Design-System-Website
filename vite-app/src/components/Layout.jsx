import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';
import '../styles/global.css';

const Layout = ({ children }) => (
  <div className="layout-root">
    <Navbar />
    <div className="layout-body">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  </div>
);

export default Layout; 