import React from 'react';

const VisualConsistency = () => (
  <div>
    <h1>Visual Consistency</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '60px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Visual consistency code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use consistent colors, spacing, and typography.</li>
        <li>Align elements to a grid.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Grid</td><td>8px base</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default VisualConsistency; 