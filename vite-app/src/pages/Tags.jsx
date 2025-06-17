import React from 'react';

const Tags = () => (
  <div>
    <h1>Tags / Label</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '40px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`<span className=\"tag\">Label</span>`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use tags to highlight status or categories.</li>
        <li>Keep tag text short.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Height</td><td>28px</td></tr>
          <tr><td>Border Radius</td><td>8px</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default Tags; 