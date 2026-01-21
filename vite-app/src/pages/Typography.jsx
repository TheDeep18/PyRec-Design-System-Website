import React from 'react';

const Typography = () => (
  <>
    <h1>Typography</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '80px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`<h1>Heading 1</h1>\n<p>Body text</p>`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use headings to structure content.</li>
        <li>Maintain hierarchy and consistency.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Font Family</td><td>Inter</td></tr>
          <tr><td>Base Size</td><td>16px</td></tr>
          <tr><td>Heading 1</td><td>28px Bold</td></tr>
          <tr><td>Heading 2</td><td>24px SemiBold</td></tr>
        </tbody>
      </table>
    </section>
  </>
);

export default Typography; 