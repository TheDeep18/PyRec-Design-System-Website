import React from 'react';

const UploadButton = () => (
  <div>
    <h1>Upload Button</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '60px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`<button className=\"btn-upload\">Upload</button>`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use for file upload actions.</li>
        <li>Provide feedback after upload.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Height</td><td>40px</td></tr>
          <tr><td>Border Radius</td><td>12px</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default UploadButton; 