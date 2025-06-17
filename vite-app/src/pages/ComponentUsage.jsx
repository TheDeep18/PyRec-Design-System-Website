import React from 'react';

const ComponentUsage = () => (
  <div>
    <h1>Component Usage & Best Practices</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '60px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Component usage code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Reuse components to ensure consistency.</li>
        <li>Follow naming conventions.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Component Naming</td><td>PascalCase</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default ComponentUsage; 