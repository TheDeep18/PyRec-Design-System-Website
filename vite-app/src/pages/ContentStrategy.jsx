import React from 'react';

const ContentStrategy = () => (
  <div>
    <h1>Content Strategy / Tone of Voice</h1>
    <section className="card">
      <h2>Design</h2>
      <div style={{height: '60px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'}}>Image Placeholder</div>
    </section>
    <section className="card">
      <h2>Code</h2>
      <pre><code>{`// Content strategy code example`}</code></pre>
    </section>
    <section className="card">
      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use clear, concise, and friendly language.</li>
        <li>Maintain a consistent tone across the product.</li>
      </ul>
    </section>
    <section className="card">
      <h2>Specs</h2>
      <table className="table-specs">
        <tbody>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Voice</td><td>Friendly, Professional</td></tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default ContentStrategy; 