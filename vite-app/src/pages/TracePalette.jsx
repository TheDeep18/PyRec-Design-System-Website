import React from 'react';

const TracePalette = () => (
  <div>
    <h1>Trace Palette</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '80px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Trace palette code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Allow users to select and manage traces easily.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Palette Size</td><td>Medium</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default TracePalette; 