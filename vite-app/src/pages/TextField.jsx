import React from 'react';

const TextField = () => (
  <div>
    <h1>Text Field</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '60px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`<input type=\"text\" placeholder=\"Default\" />`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use for short, single-line text input.</li>
        <li>Label fields clearly.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Height</td><td>40px</td></tr>
          <tr><td>Border Radius</td><td>8px</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default TextField; 