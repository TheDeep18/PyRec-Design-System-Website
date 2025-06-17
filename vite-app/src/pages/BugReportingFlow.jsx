import React from 'react';

const BugReportingFlow = () => (
  <div>
    <h1>Bug Reporting Flow</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '100px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Bug reporting flow code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Guide users through clear steps.</li>
        <li>Provide feedback at each stage.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Step Indicator</td><td>Visible</td></tr>
          <tr><td>Button Placement</td><td>Bottom right</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default BugReportingFlow; 