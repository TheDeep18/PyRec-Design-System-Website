import React from 'react';

const Icons = () => (
  <div>
    <h1>Icons</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '60px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`<svg width=\"24\" height=\"24\"><!-- ... --></svg>`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use icons to clarify actions or content.</li>
        <li>Keep icon style consistent across the product.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Size</td><td>24px</td></tr>
          <tr><td>Stroke</td><td>2px</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default Icons; 