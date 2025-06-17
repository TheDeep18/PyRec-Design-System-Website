import React from 'react';

const Accessibility = () => (
  <div>
    <h1>Accessibility</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '60px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Accessibility code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Ensure all components are keyboard accessible.</li>
        <li>Use sufficient color contrast.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Contrast Ratio</td><td>&gt; 4.5:1</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default Accessibility; 