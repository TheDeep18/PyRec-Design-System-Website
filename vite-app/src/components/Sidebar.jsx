import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <ul className="sidebar-section">
        <li className="sidebar-title">Elements</li>
        <li><a href="#/color">Color</a></li>
        <li><a href="#/typography">Typography</a></li>
        <li><a href="#/icons">Icons</a></li>
        <li><a href="#/spacing">Spacing</a></li>
      </ul>
      <ul className="sidebar-section">
        <li className="sidebar-title">Components/Elements</li>
        <li>
          <a href="#/button">Button</a>
        </li>
        <li><a href="#/checkbox">Checkbox</a></li>
        <li><a href="#/textfield">Text Field</a>
          <ul className="sidebar-sub">
            <li><a href="#/textfield#default">Default</a></li>
            <li><a href="#/textfield#filled">Filled</a></li>
            <li><a href="#/textfield#icon">With Icon</a></li>
            <li><a href="#/textfield#disabled">Disabled</a></li>
          </ul>
        </li>
        <li><a href="#/upload-button">Upload Button</a></li>
        <li><a href="#/tags">Tags/Label</a></li>
      </ul>
      <ul className="sidebar-section">
        <li className="sidebar-title">Patterns</li>
        <li><a href="#/bug-reporting-flow">Bug Reporting Flow</a></li>
        <li><a href="#/upload-flow">Upload Flow</a></li>
        <li><a href="#/trace-palette">Trace Palette</a></li>
        <li><a href="#/3d-viewer">3D Viewer</a></li>
        <li><a href="#/stamp-tool">Stamp Tool</a></li>
      </ul>
      <ul className="sidebar-section">
        <li className="sidebar-title">Guidelines</li>
        <li><a href="#/accessibility">Accessibility</a></li>
        <li><a href="#/content-strategy">Content Strategy / Tone of Voice</a></li>
        <li><a href="#/component-usage">Component Usage & Best Practices</a></li>
        <li><a href="#/versioning">Versioning / Changelog</a></li>
        <li><a href="#/visual-consistency">Visual Consistency</a></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar; 