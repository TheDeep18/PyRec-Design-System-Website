import React from 'react';

const Content = ({ children }) => (
  <main className="layout-main">
    <div className="main-content">
      {children}
    </div>
  </main>
);

export default Content; 