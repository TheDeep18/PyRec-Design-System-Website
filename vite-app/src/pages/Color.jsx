import React, { useState } from 'react';

// --- Data Structure for all Colors ---

import { BASE_COLORS, MAPPED_COLORS } from '../data/colors';

// --- Helper Components ---

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

const CopyableCell = ({ text, id, onCopy }) => {
  return (
    <span
      style={{ cursor: 'pointer', color: 'var(--blue-600)', fontFamily: 'Fira Mono, monospace' }}
      onClick={() => onCopy(text, id)}
    >
      {text}
    </span>
  );
};

// --- Main Components ---

const ColorTable = ({ colors, title, onCopy, copied, mappedTokens }) => (
  <div className="card" style={{ padding: '24px 32px', marginBottom: 32 }}>
    <h2 style={{ marginBottom: 24, textTransform: 'capitalize' }}>{title}</h2>
    <table className="table-specs" style={{ width: '100%', fontSize: 16 }}>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>Preview</th>
          <th style={{ width: '25%' }}>Color Name</th>
          <th style={{ width: '35%' }}>Token</th>
          <th style={{ width: '30%' }}>Hex</th>
        </tr>
      </thead>
      <tbody>
        {colors.map((color, idx) => {
          // If a mapped token exists for this color, use it
          const mapped = mappedTokens && mappedTokens.find(
            t => t.hex.toLowerCase() === color.hex.toLowerCase()
          );
          const tokenToShow = mapped ? `--${mapped.tokenName}` : color.token || `--${color.tokenName}`;
          return (
            <tr key={color.token || color.tokenName}>
              <td>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: color.hex,
                    border: '1.5px solid var(--neutral-150)',
                    margin: '0 auto',
                  }}
                />
              </td>
              <td>{color.name}</td>
              <td>
                <CopyableCell text={tokenToShow} id={`${title}-${idx}-token`} onCopy={onCopy} />
                {copied === `${title}-${idx}-token` && <span style={{ marginLeft: 8, color: 'var(--success-600)', fontSize: 13 }}>Copied!</span>}
              </td>
              <td>
                <CopyableCell text={color.hex} id={`${title}-${idx}-hex`} onCopy={onCopy} />
                {copied === `${title}-${idx}-hex` && <span style={{ marginLeft: 8, color: 'var(--success-600)', fontSize: 13 }}>Copied!</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

const MappedColorTable = ({ colors, title, onCopy, copied }) => (
  <div className="card" style={{ padding: '24px 32px', marginBottom: 32 }}>
    <h2 style={{ marginBottom: 24, textTransform: 'capitalize' }}>Mapped / {title}</h2>
    <table className="table-specs" style={{ width: '100%', fontSize: 16 }}>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>Preview</th>
          <th style={{ width: '25%' }}>Mapped Name</th>
          <th style={{ width: '35%' }}>Token</th>
          <th style={{ width: '30%' }}>Hex</th>
        </tr>
      </thead>
      <tbody>
        {colors.map((color, idx) => (
          <tr key={color.tokenName}>
            <td>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: color.hex,
                  border: '1.5px solid var(--neutral-150)',
                  margin: '0 auto',
                }}
              />
            </td>
            <td>{color.tokenName}</td>
            <td>
              <CopyableCell text={`--${color.tokenName}`} id={`${title}-${idx}-token`} onCopy={onCopy} />
              {copied === `${title}-${idx}-token` && <span style={{ marginLeft: 8, color: 'var(--success-600)', fontSize: 13 }}>Copied!</span>}
            </td>
            <td>
              <CopyableCell text={color.hex} id={`${title}-${idx}-hex`} onCopy={onCopy} />
              {copied === `${title}-${idx}-hex` && <span style={{ marginLeft: 8, color: 'var(--success-600)', fontSize: 13 }}>Copied!</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


const Color = () => {
  const [activePalette, setActivePalette] = useState('brand');
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, id) => {
    copyToClipboard(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const paletteKeys = Object.keys(BASE_COLORS);
  const activePaletteIndex = paletteKeys.indexOf(activePalette);

  const selectNextPalette = () => {
    const nextIndex = (activePaletteIndex + 1) % paletteKeys.length;
    setActivePalette(paletteKeys[nextIndex]);
  };

  const selectPrevPalette = () => {
    const prevIndex = (activePaletteIndex - 1 + paletteKeys.length) % paletteKeys.length;
    setActivePalette(paletteKeys[prevIndex]);
  };

  return (
    <>
      <h1>Base Colors</h1>
      <div className="card" style={{ padding: 32, marginBottom: 32 }}>
        <h2 style={{ marginBottom: 24 }}>Light Theme</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
          <button onClick={selectPrevPalette} className="btn btn-icon" aria-label="Previous color palette" style={{ border: 'none' }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18l-6-6 6-6"></path></svg>
          </button>
          {Object.entries(BASE_COLORS).map(([key, { name, default: defaultColor }]) => (
            <div
              key={key}
              title={name}
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: defaultColor,
                border: activePalette === key ? '3px solid var(--neutral-900)' : '2px solid var(--neutral-150)',
                boxShadow: activePalette === key ? `0 0 0 3px ${defaultColor}` : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                transform: activePalette === key ? 'scale(1.1)' : 'scale(1)',
              }}
              onClick={() => setActivePalette(key)}
            />
          ))}
          <button onClick={selectNextPalette} className="btn btn-icon" aria-label="Next color palette" style={{ border: 'none' }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6"></path></svg>
          </button>
        </div>

        <ColorTable
          title={BASE_COLORS[activePalette].name}
          colors={BASE_COLORS[activePalette].tokens}
          onCopy={handleCopy}
          copied={copied}
          mappedTokens={Object.values(MAPPED_COLORS).flatMap(m => m.tokens)}
        />
        <div style={{ marginTop: 16, color: 'var(--neutral-500)', fontSize: 14 }}>
          Click any token or hex value to copy it to your clipboard.
        </div>
      </div>

      <h1>Mapped Colors</h1>
      {Object.entries(MAPPED_COLORS).map(([key, { name, tokens }]) => (
        <MappedColorTable
          key={key}
          title={name}
          colors={tokens}
          onCopy={handleCopy}
          copied={copied}
        />
      ))}
    </>
  );
};

export default Color; 