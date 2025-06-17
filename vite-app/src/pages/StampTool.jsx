import React from 'react';

const StampTool = () => (
  <div>
    <h1>Stamp Tool</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '80px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Stamp tool code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use for marking or annotating areas in the UI.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Stamp Size</td><td>Medium</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default StampTool; 