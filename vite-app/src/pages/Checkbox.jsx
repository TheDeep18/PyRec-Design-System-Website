import React, { useState, useRef } from 'react';
import CopyCodeButton from '../components/CopyCodeButton';

const SIZES = ['sm', 'md', 'lg'];
const STATES = ['default', 'hover', 'selected', 'indeterminate', 'disabled', 'error', 'focus', 'pressed'];
const RADIUS = { sm: 'var(--scale-50)', md: 'var(--scale-150)', lg: 'var(--scale-200)' };
const SIZE_PX = { sm: 16, md: 20, lg: 24 };

function getCheckboxClass(size, state) {
  let classes = ['checkbox', `checkbox-${size}`];
  if (state && state !== 'default') classes.push(`is-${state}`);
  return classes.join(' ');
}

function CheckboxIcon({ state }) {
  if (state === 'selected') {
    return (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 10.5 9 14.5 15 7.5" /></svg>
    );
  }
  if (state === 'indeterminate') {
    return (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="6" y1="10" x2="14" y2="10" /></svg>
    );
  }
  return null;
}

function getCodeString(size, state, showLabel, label) {
  const classes = getCheckboxClass(size, state);
  const checked = state === 'selected' || state === 'indeterminate';
  const indeterminate = state === 'indeterminate';
  const disabled = state === 'disabled';
  return `<label className="checkbox-label">
  <span className=\"${classes}\">
    <input type=\"checkbox\"${checked ? ' checked' : ''}${indeterminate ? ' data-indeterminate=\"true\"' : ''}${disabled ? ' disabled' : ''} />
    <span className=\"checkbox-custom\">${checked ? (indeterminate ? '<IndeterminateIcon />' : '<CheckIcon />') : ''}</span>
  </span>${showLabel ? ` ${label}` : ''}
</label>`;
}

function getCSSString(size, state, showLabel, label) {
  const classes = `checkbox checkbox-${size}${state && state !== 'default' ? ` is-${state}` : ''}`;
  const checked = state === 'selected' || state === 'indeterminate';
  const indeterminate = state === 'indeterminate';
  const disabled = state === 'disabled';
  return `<label class="checkbox-label">
  <span class="${classes}">
    <input type="checkbox"${checked ? ' checked' : ''}${indeterminate ? ' data-indeterminate="true"' : ''}${disabled ? ' disabled' : ''} />
    <span class="checkbox-custom">${checked ? (indeterminate ? '<svg>...</svg>' : '<svg>...</svg>') : ''}</span>
  </span>${showLabel ? ` ${label}` : ''}
</label>`;
}

function getPythonString(size, state, showLabel, label) {
  let stateStr = state === 'disabled' ? 'state="disabled"' : '';
  let checked = state === 'selected' ? '1' : '0';
  let text = showLabel ? label : '';
  return `import tkinter as tk\nroot = tk.Tk()\nvar = tk.IntVar(value=${checked})\ncb = tk.Checkbutton(root, text='${text}', variable=var, ${stateStr})\ncb.pack()\nroot.mainloop()`;
}

function CheckboxPlayground({ size, state, showLabel, label, onChange, checked, indeterminate, disabled }) {
  return (
    <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <span
        className={getCheckboxClass(size, state)}
        tabIndex={disabled ? -1 : 0}
        style={{ width: SIZE_PX[size], height: SIZE_PX[size], borderRadius: RADIUS[size] }}
      >
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          data-indeterminate={indeterminate ? 'true' : undefined}
          onChange={onChange}
          style={{ opacity: 0, width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, margin: 0, cursor: disabled ? 'not-allowed' : 'pointer' }}
        />
        <span className="checkbox-custom">
          <CheckboxIcon state={indeterminate ? 'indeterminate' : checked ? 'selected' : ''} />
        </span>
      </span>
      {showLabel && <span>{label}</span>}
    </label>
  );
}

function CheckboxGallery() {
  return (
    <div className="card" style={{ overflowX: 'auto' }}>
      <h2>All States and Sizes</h2>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `120px repeat(${STATES.length}, 1fr)`, gap: 32, alignItems: 'start', width: '100%' }}>
          <div></div>
          {STATES.map(state => (
            <div key={state} style={{ textAlign: 'center', fontWeight: 600, fontSize: 18, color: '#475569', textTransform: 'capitalize', marginBottom: 8 }}>{state}</div>
          ))}
          {SIZES.map(size => (
            <React.Fragment key={size}>
              <div style={{ fontWeight: 500, fontSize: 16, color: '#64748b', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: 56 }}>{size}</div>
              {STATES.map(state => (
                <div key={state + size} style={{ display: 'flex', flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center', minHeight: 56 }}>
                  <CheckboxPlayground
                    size={size}
                    state={state}
                    showLabel={false}
                    label=""
                    checked={state === 'selected'}
                    indeterminate={state === 'indeterminate'}
                    disabled={state === 'disabled'}
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 16, color: '#64748b', fontSize: 14 }}>
        <b>Columns:</b> States &nbsp;|&nbsp; <b>Rows:</b> Sizes
      </div>
    </div>
  );
}

export default function CheckboxDoc() {
  const [size, setSize] = useState('md');
  const [state, setState] = useState('default');
  const [showLabel, setShowLabel] = useState(true);
  const [label, setLabel] = useState('Label');
  const [live, setLive] = useState(true);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [codeLang, setCodeLang] = useState('react');
  const codeRef = useRef(null);
  // Live/Manual state logic
  const isDisabled = state === 'disabled';
  const isError = state === 'error';
  const isFocus = state === 'focus';
  const isPressed = state === 'pressed';
  const isHover = state === 'hover';
  const isSelected = state === 'selected';
  const isIndeterminate = state === 'indeterminate';

  // Playground state logic
  const playgroundChecked = live ? checked : isSelected;
  const playgroundIndeterminate = live ? indeterminate : isIndeterminate;
  const playgroundDisabled = live ? false : isDisabled;

  function getCodeByLang() {
    if (codeLang === 'css') {
      return getCSSString(size, live ? 'default' : state, showLabel, label);
    } else if (codeLang === 'python') {
      return getPythonString(size, live ? 'default' : state, showLabel, label);
    } else {
      return getCodeString(size, live ? 'default' : state, showLabel, label);
    }
  }

  return (
    <div className="main-content">
      <h1>Checkbox</h1>
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 24 }}>
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
            <input type="checkbox" checked={showLabel} onChange={e => setShowLabel(e.target.checked)} />
            Show Label
          </label>
          <input type="text" value={label} onChange={e => setLabel(e.target.value)} style={{ marginLeft: 8, width: 100 }} placeholder="Label" />
        </div>
        <div className="playground-card">
          <div className="playground-preview" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <span className="playground-section-label" style={{ position: 'static', marginBottom: 24, textAlign: 'center' }}>Component Preview</span>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 80 }}>
              <CheckboxPlayground
                size={size}
                state={live ? 'default' : state}
                showLabel={showLabel}
                label={label}
                checked={playgroundChecked}
                indeterminate={playgroundIndeterminate}
                disabled={playgroundDisabled}
                onChange={e => {
                  setChecked(e.target.checked);
                  setIndeterminate(false);
                }}
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
      <CheckboxGallery />
      <div className="card">
        <h2>Specs</h2>
        <table className="table-specs">
          <tbody>
            <tr><th>Property</th><th>Value</th></tr>
            <tr><td>Size</td><td>sm: var(--scale-400) (16px), md: var(--scale-500) (20px), lg: var(--scale-600) (24px)</td></tr>
            <tr><td>Border Radius</td><td>sm: var(--scale-50) (2px), md: var(--scale-150) (6px), lg: var(--scale-200) (8px)</td></tr>
            <tr><td>Colors</td><td>Uses same tokens as Button (primary, border, background, etc.)</td></tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h2>Usage Guidelines</h2>
        <ul>
          <li>Use for binary or indeterminate choices.</li>
          <li>Label checkboxes clearly and accessibly.</li>
          <li>Use indeterminate state for partial selections.</li>
        </ul>
      </div>
    </div>
  );
} 