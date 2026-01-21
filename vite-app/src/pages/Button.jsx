import React, { useState, useRef } from 'react';
import CopyCodeButton from '../components/CopyCodeButton';
import getComponentCSSString from '../utils/getComponentCSSString';

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
  return getComponentCSSString('button', { variant, size, state, showLeadingIcon, showTrailingIcon });
}

function getPythonString(variant, size, state, showLeadingIcon, showTrailingIcon, showText, label) {
  let stateStr = state === 'disabled' ? 'state="disabled"' : '';
  let text = showText ? label : '';
  return `import tkinter as tk\nroot = tk.Tk()\nbutton = tk.Button(root, text='${text}', width=20, height=2, ${stateStr})\nbutton.pack()\nroot.mainloop()`;
}

function ButtonGallery() {
  return (
    <div style={{ overflowX: 'auto' }}>
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

const ICON = (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
);

const ButtonSpecs = () => (
  <div className="specs-container">
    {/* Anatomy */}
    <section className="specs-section">
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Anatomy</h2>
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <div style={{ border: '2px solid #b39ddb', borderRadius: 8, padding: 32, minWidth: 400, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, position: 'relative' }}>
            <ButtonPreview
              variant="primary"
              size="md"
              label="Button Label"
              showLeadingIcon
              leadingIcon={ICON}
              showTrailingIcon
              trailingIcon={ICON}
            />
            {/* Callouts */}
            <div style={{ position: 'absolute', left: 38, top: 8 }}><AnatomyCallout n={1} /></div>
            <div style={{ position: 'absolute', left: '50%', top: 8, transform: 'translateX(-50%)' }}><AnatomyCallout n={2} /></div>
            <div style={{ position: 'absolute', right: 38, top: 8 }}><AnatomyCallout n={3} /></div>
          </div>
        </div>
        <div style={{ minWidth: 220 }}>
          <AnatomyLegend />
        </div>
      </div>
    </section>

    {/* Properties: Size */}
    <section className="specs-section">
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Properties</h2>
      <h3 style={{ fontSize: 22, fontWeight: 600, margin: '16px 0 24px 0' }}>Size</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {[
          { size: 'sm', radius: 6, text: 'body/sm' },
          { size: 'xs', radius: 4, text: 'body/xs' },
          { size: 'md', radius: 8, text: 'body/md' },
          { size: 'lg', radius: 12, text: 'body/lg' },
        ].map(({ size, radius, text }) => (
          <div key={size} style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <div className="specs-preview">
              <ButtonPreview
                variant="primary"
                size={size}
                label="Button Label"
                showText={true}
              />
            </div>
            <div className="specs-info" style={{ minWidth: 120 }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{size}</div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>◇ btn</div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>Border radius: {radius}</div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>T <b>Button</b></div>
              <div style={{ fontSize: 13, color: '#b91c1c', background: '#f3f4f6', borderRadius: 4, display: 'inline-block', padding: '2px 8px' }}>Text style: {text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Properties: Type */}
    <section className="specs-section">
      <h3 style={{ fontSize: 22, fontWeight: 600, margin: '16px 0 24px 0' }}>Type</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {[
          { variant: 'primary', label: 'Primary', fill: '--surface-primary-action', text: '--text-on-action' },
          { variant: 'primary', label: 'Disabled', fill: '--surface-disabled', text: '--text-disabled', state: 'disabled' },
          { variant: 'secondary', label: 'Secondary', fill: '--surface-secondary-action', text: '--text-action' },
          { variant: 'tertiary', label: 'Tertiary', fill: 'transparent', text: '--text-action' },
          { variant: 'quaternary', label: 'Quaternary', fill: 'none', text: '--text-action' },
          { variant: 'error', label: 'Error', fill: '--surface-error', text: '--text-error' },
          { variant: 'success', label: 'Success', fill: '--surface-success', text: '--text-success' },
          { variant: 'alert', label: 'Alert', fill: '--surface-alert', text: '--text-alert' },
        ].map(({ variant, label, fill, text, state }) => (
          <div key={label} style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <div className="specs-preview">
              <ButtonPreview
                variant={variant}
                size="md"
                label="Button Label"
                showText={true}
                showLeadingIcon
                leadingIcon={ICON}
                showTrailingIcon
                trailingIcon={ICON}
                state={state}
              />
            </div>
            <div className="specs-info" style={{ minWidth: 120 }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{label.toLowerCase()}</div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>◇ btn</div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>Background: <code>{fill}</code></div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>T <b>Button</b></div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>Text color: <code>{text}</code></div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Properties: State */}
    <section className="specs-section">
      <h3 style={{ fontSize: 22, fontWeight: 600, margin: '16px 0 24px 0' }}>State</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {[
          { state: 'default', label: 'Default', fill: '--surface-primary-action' },
          { state: 'hover', label: 'Hover', fill: '--surface-primary-action-hover' },
          { state: 'pressed', label: 'Pressed', fill: '--surface-primary-action-pressed' },
        ].map(({ state, label, fill }) => (
          <div key={label} style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <div className="specs-preview">
              <ButtonPreview
                variant="primary"
                size="md"
                label="Button Label"
                showText={true}
                showLeadingIcon
                leadingIcon={ICON}
                showTrailingIcon
                trailingIcon={ICON}
                state={state === 'default' ? undefined : state}
              />
            </div>
            <div className="specs-info" style={{ minWidth: 120 }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{label.toLowerCase()}</div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>◇ btn</div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>Background color: <code>{fill}</code></div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Show Leading/Trailing Icon, Show Text */}
    <section className="specs-section">
      <h3 style={{ fontSize: 22, fontWeight: 600, margin: '16px 0 24px 0' }}>Show Leading Icon</h3>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <div className="specs-preview">
          <ButtonPreview variant="primary" size="md" label="Button Label" showText={true} showLeadingIcon leadingIcon={ICON} />
        </div>
        <div className="specs-info" style={{ minWidth: 120 }}>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Property type: Boolean</div>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Default: true</div>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Associated icon: <b>nav-arrow-down</b></div>
        </div>
      </div>
      <h3 style={{ fontSize: 22, fontWeight: 600, margin: '24px 0' }}>Show Trailing Icon</h3>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <div className="specs-preview">
          <ButtonPreview variant="primary" size="md" label="Button Label" showText={true} showTrailingIcon trailingIcon={ICON} />
        </div>
        <div className="specs-info" style={{ minWidth: 120 }}>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Property type: Boolean</div>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Default: true</div>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Associated icon: <b>nav-arrow-down</b></div>
        </div>
      </div>
      <h3 style={{ fontSize: 22, fontWeight: 600, margin: '24px 0' }}>Show Text</h3>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <div className="specs-preview">
          <ButtonPreview variant="primary" size="md" label="Button Label" showText={true} />
        </div>
        <div className="specs-info" style={{ minWidth: 120 }}>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Property type: Boolean</div>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Default: true</div>
          <div style={{ fontSize: 14, marginBottom: 2 }}>Associated text: <b>Button</b></div>
        </div>
      </div>
    </section>
  </div>
);

function AnatomyCallout({ n }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <div style={{ background: '#b45309', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>{n}</div>
      <div style={{ width: 2, height: 24, background: '#b45309' }} />
    </div>
  );
}

function AnatomyLegend() {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 16 }}>
      <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ background: '#b45309', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>1</span>
        <span><b>nav-arrow-down</b><br /><span style={{ fontWeight: 400, fontSize: 13 }}>Depends on: <b>nav-arrow-down</b><br />Weight: Dynamic</span></span>
      </li>
      <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ background: '#b45309', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>2</span>
        <span><b>Button</b><br /><span style={{ fontWeight: 400, fontSize: 13 }}>Text style: <b>body/md</b></span></span>
      </li>
      <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ background: '#b45309', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>3</span>
        <span><b>nav-arrow-down</b><br /><span style={{ fontWeight: 400, fontSize: 13 }}>Depends on: <b>nav-arrow-down</b><br />Weight: Dynamic</span></span>
      </li>
    </ol>
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
    <>
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

      <div className="card" style={{ padding: '32px' }}>
        <ButtonSpecs />
      </div>

      <div className="card" style={{ marginTop: '24px', padding: '32px' }}>
        <ButtonGallery />
      </div>
    </>
  );
} 