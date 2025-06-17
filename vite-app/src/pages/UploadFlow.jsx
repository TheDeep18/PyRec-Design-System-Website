import React from 'react';

const UploadFlow = () => (
  <div>
    <h1>Upload Flow</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '100px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Upload flow code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Allow users to select files easily.</li>
        <li>Show progress and feedback.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Progress Bar</td><td>Visible</td></tr>
          <tr><td>Button Placement</td><td>Bottom right</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default UploadFlow; 