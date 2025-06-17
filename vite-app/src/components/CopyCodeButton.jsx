import React, { useState } from 'react';

export default function CopyCodeButton({ codeRef }) {
  const [showToast, setShowToast] = useState(false);
  const [toastKey, setToastKey] = useState(0);

  const handleCopy = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
      setShowToast(false);
      setTimeout(() => {
        setToastKey(k => k + 1);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1700);
      }, 10);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        className="playground-copy-btn"
        onClick={handleCopy}
        title="Copy code"
        type="button"
        aria-label="Copy code to clipboard"
      >
        Copy Code
      </button>
      <div
        className={`copy-toast${showToast ? ' show' : ''}`}
        key={toastKey}
      >
        Copied to clipboard!
      </div>
    </div>
  );
} 