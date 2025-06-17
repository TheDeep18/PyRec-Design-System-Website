import React from 'react';

const Versioning = () => (
  <div>
    <h1>Versioning / Changelog</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '40px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Versioning code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Document all changes in the changelog.</li>
        <li>Follow semantic versioning.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Version Format</td><td>MAJOR.MINOR.PATCH</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default Versioning; 