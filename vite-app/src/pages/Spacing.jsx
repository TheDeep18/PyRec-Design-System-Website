import React from 'react';

const Spacing = () => (
  <div>
    <h1>Spacing</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '40px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`:root {\n  --padding-main: 32px;\n  --radius: 12px;\n}`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use consistent spacing for layout and components.</li>
        <li>Follow the 4/8/12/16/24/32px scale.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Spacing</th><th>Value</th></tr>
          <tr><td>Main Padding</td><td>32px</td></tr>
          <tr><td>Border Radius</td><td>12px</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default Spacing; 