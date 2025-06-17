import React, { useState, useRef } from 'react';
import CopyCodeButton from '../components/CopyCodeButton';

const VARIANTS = ['primary', 'disabled', 'secondary', 'tertiary', 'quaternary', 'error', 'success', 'alert'];
const SIZES = ['xs', 'sm', 'md', 'lg'];
const STATES = ['default', 'hover', 'pressed', 'disabled'];

function getButtonClass(variant, size, state) {
  let classes = ['btn', `btn-${variant}`, `btn-${size}`];
  if (state && state !== 'default') classes.push(`is-${state}`);
  return classes.join(' ');
}

const ButtonPreview = ({ variant, size, state, showLeadingIcon, leadingIcon, showTrailingIcon, trailingIcon, showText, label }) => (
  <button
    className={getButtonClass(variant, size, state)}
    disabled={state === 'disabled'}
    tabIndex={state === 'disabled' ? -1 : 0}
  >
    {showLeadingIcon && leadingIcon && <span className="btn-icon btn-icon-leading">{leadingIcon}</span>}
    {showText && label}
    {showTrailingIcon && trailingIcon && <span className="btn-icon btn-icon-trailing">{trailingIcon}</span>}
  </button>
);

function ButtonPlayground({ variant, size, state, showLeadingIcon, leadingIcon, showTrailingIcon, trailingIcon, showText, label }) {
  return (
    <button
      className={getButtonClass(variant, size, state)}
      disabled={state === 'disabled'}
      tabIndex={state === 'disabled' ? -1 : 0}
    >
      {showLeadingIcon && leadingIcon && <span className="btn-icon btn-icon-leading">{leadingIcon}</span>}
      {showText && label}
      {showTrailingIcon && trailingIcon && <span className="btn-icon btn-icon-trailing">{trailingIcon}</span>}
    </button>
  );
}

function getCodeString(variant, size, state, showLeadingIcon, leadingIcon, showTrailingIcon, trailingIcon, showText, label) {
  return `<button className=\"${getButtonClass(variant, size, state)}\"${state === 'disabled' ? ' disabled' : ''}>\n  ${showLeadingIcon && leadingIcon ? '<IconLeading /> ' : ''}${showText ? label : ''}${showTrailingIcon && trailingIcon ? ' <IconTrailing />' : ''}\n</button>`;
}

function getCSSString(variant, size, state, showLeadingIcon, showTrailingIcon, showText, label) {
  let classes = `btn btn-${variant} btn-${size}`;
  if (state && state !== 'default') classes += ` is-${state}`;
  let iconLeading = showLeadingIcon ? '<span class="btn-icon btn-icon-leading">...</span> ' : '';
  let iconTrailing = showTrailingIcon ? ' <span class="btn-icon btn-icon-trailing">...</span>' : '';
  let text = showText ? label : '';
  return `<button class="${classes}"${state === 'disabled' ? ' disabled' : ''}>\n  ${iconLeading}${text}${iconTrailing}\n</button>`;
}

function getPythonString(variant, size, state, showLeadingIcon, showTrailingIcon, showText, label) {
  let stateStr = state === 'disabled' ? 'state="disabled"' : '';
  let text = showText ? label : '';
  return `import tkinter as tk\nroot = tk.Tk()\nbutton = tk.Button(root, text='${text}', width=20, height=2, ${stateStr})\nbutton.pack()\nroot.mainloop()`;
}

function ButtonGallery() {
  return (
    <div className="card" style={{ overflowX: 'auto' }}>
      <h2>All Variants, Sizes, and States</h2>
      <div style={{ width: '90%', overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `120px repeat(${VARIANTS.length}, 1fr)`, gap: 32, alignItems: 'start', width: '100%' }}>
          <div></div>
          {VARIANTS.map(variant => (
            <div key={variant} style={{ textAlign: 'center', fontWeight: 600, fontSize: 18, color: '#475569', textTransform: 'capitalize', marginBottom: 8 }}>{variant}</div>
          ))}
          {SIZES.map(size => (
            <React.Fragment key={size}>
              <div style={{ fontWeight: 500, fontSize: 16, color: '#64748b', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: 56 }}>{size}</div>
              {VARIANTS.map(variant => (
                <div key={variant + size} style={{ display: 'flex', flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center', minHeight: 56 }}>
                  {STATES.map(state => (
                    <ButtonPreview
                      key={state}
                      variant={variant}
                      size={size}
                      state={state}
                      showLeadingIcon={false}
                      leadingIcon={null}
                      showTrailingIcon={false}
                      trailingIcon={null}
                      showText={true}
                      label="Button"
                    />
                  ))}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 16, color: '#64748b', fontSize: 14 }}>
        <b>Columns:</b> Variants &nbsp;|&nbsp; <b>Rows:</b> Sizes &nbsp;|&nbsp; <b>Each cell:</b> All states (default, hover, pressed, disabled)
      </div>
    </div>
  );
}

export default function ButtonDoc() {
  const [variant, setVariant] = useState('primary');
  const [size, setSize] = useState('md');
  const [state, setState] = useState('default');
  const [label, setLabel] = useState('Button');
  const [showText, setShowText] = useState(true);
  const [showLeadingIcon, setShowLeadingIcon] = useState(false);
  const [showTrailingIcon, setShowTrailingIcon] = useState(false);
  const [live, setLive] = useState(true);
  const leadingIcon = <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>;
  const trailingIcon = <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M16 12l-2-2-4 4" /></svg>;
  const [showCode, setShowCode] = useState(false);
  const [galleryState, setGalleryState] = useState('default');
  const codeRef = useRef(null);
  const [codeLang, setCodeLang] = useState('react');

  function getCodeByLang() {
    if (codeLang === 'css') {
      return getCSSString(variant, size, live ? 'default' : state, showLeadingIcon, showTrailingIcon, showText, label);
    } else if (codeLang === 'python') {
      return getPythonString(variant, size, live ? 'default' : state, showLeadingIcon, showTrailingIcon, showText, label);
    } else {
      return getCodeString(variant, size, live ? 'default' : state, showLeadingIcon, leadingIcon, showTrailingIcon, trailingIcon, showText, label);
    }
  }

  return (
    <div className="main-content">
      <h1>Button</h1>
      <div className="card" style={{ marginBottom: 24, padding: 32 }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 24 }}>
          <label>
            Variant:
            <select value={variant} onChange={e => setVariant(e.target.value)} style={{ marginLeft: 8 }}>
              {VARIANTS.map(v => <option key={v}>{v}</option>)}
            </select>
          </label>
          <label>
            Size:
            <select value={size} onChange={e => setSize(e.target.value)} style={{ marginLeft: 8 }}>
              {SIZES.map(s => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label>
            State:
            <select value={state} onChange={e => setState(e.target.value)} style={{ marginLeft: 8 }} disabled={live}>
              {STATES.map(s => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={live} onChange={e => setLive(e.target.checked)} />
            Live
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={showText} onChange={e => setShowText(e.target.checked)} />
            Show Text
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={showLeadingIcon} onChange={e => setShowLeadingIcon(e.target.checked)} />
            Show Leading Icon
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={showTrailingIcon} onChange={e => setShowTrailingIcon(e.target.checked)} />
            Show Trailing Icon
          </label>
          <input type="text" value={label} onChange={e => setLabel(e.target.value)} style={{ marginLeft: 8, width: 100 }} placeholder="Label" />
        </div>
        <div className="playground-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>
          <div className="playground-preview" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <span className="playground-section-label" style={{ position: 'static', marginBottom: 24, textAlign: 'center' }}>Component Preview</span>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 80 }}>
              <ButtonPlayground
                variant={variant}
                size={size}
                state={live ? 'default' : state}
                showLeadingIcon={showLeadingIcon}
                leadingIcon={leadingIcon}
                showTrailingIcon={showTrailingIcon}
                trailingIcon={trailingIcon}
                showText={showText}
                label={label}
              />
            </div>
          </div>
          <div className="playground-divider" />
          <div className="playground-code" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16, marginTop: 8 }}>
              <span className="playground-code-label" style={{ fontWeight: 600, color: '#64748b', fontSize: 15, textAlign: 'center' }}>Code Preview</span>
              <div style={{ display: 'flex', gap: 4 }}>
                <button
                  className={`playground-code-toggle${codeLang === 'react' ? ' selected' : ''}`}
                  onClick={() => setCodeLang('react')}
                  aria-label="Show React code"
                  type="button"
                >React</button>
                <button
                  className={`playground-code-toggle${codeLang === 'css' ? ' selected' : ''}`}
                  onClick={() => setCodeLang('css')}
                  aria-label="Show CSS/HTML code"
                  type="button"
                >CSS</button>
                <button
                  className={`playground-code-toggle${codeLang === 'python' ? ' selected' : ''}`}
                  onClick={() => setCodeLang('python')}
                  aria-label="Show Python code"
                  type="button"
                >Python</button>
              </div>
              <CopyCodeButton codeRef={codeRef} />
            </div>
            <pre ref={codeRef} style={{ alignSelf: 'center' }}><code>{getCodeByLang()}</code></pre>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
        <label>
          State for Gallery:
          <select value={galleryState} onChange={e => setGalleryState(e.target.value)} style={{ marginLeft: 8 }}>
            {STATES.map(s => <option key={s}>{s}</option>)}
          </select>
        </label>
      </div>
      <ButtonGallery />
      <div className="card">
        <h2>Specs</h2>
        <table className="table-specs">
          <tbody>
            <tr><th>Property</th><th>Value</th></tr>
            <tr><td>Padding</td><td>{size === 'sm' ? 'var(--scale-300) var(--scale-400)' : size === 'md' ? 'var(--scale-400) var(--scale-500)' : 'var(--scale-500) var(--scale-600)'}</td></tr>
            <tr><td>Border Radius</td><td>var(--border-radius-lg)</td></tr>
            <tr><td>Font</td><td>var(--font-family-body), var(--font-weight-semibold), {size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px'}</td></tr>
            <tr><td>Background</td><td>{`var(--btn-${variant}${galleryState !== 'default' ? '-' + galleryState : ''})`}</td></tr>
            <tr><td>Text Color</td><td>var(--text-on-action)</td></tr>
            <tr><td>Border</td><td>{variant === 'outlined' ? '1.5px solid var(--btn-primary)' : 'none'}</td></tr>
            <tr><td>Variants</td><td>primary, secondary, tertiary</td></tr>
            <tr><td>States</td><td>default, hover, pressed, disabled</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 