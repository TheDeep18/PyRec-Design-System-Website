import React from 'react';

const Color = () => (
  <div>
    <h1>Color</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '60px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`:root {\n  --color-primary: #0ea5e9;\n  --color-bg: #f8fafc;\n}`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use primary color for main actions and highlights.</li>
        <li>Maintain sufficient contrast for accessibility.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Color</th><th>Hex</th></tr>
          <tr><td>Primary</td><td>#0ea5e9</td></tr>
          <tr><td>Background</td><td>#f8fafc</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default Color; 