// Utility to generate CSS code for code preview tabs for any component
// Usage: getComponentCSSString('button', { variant, size, state, showLeadingIcon, showTrailingIcon })

function getComponentCSSString(component, options = {}) {
  if (component === 'button') {
    const { variant, size, state, showLeadingIcon, showTrailingIcon } = options;
    let css = `.btn {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--border-radius-lg);
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border 0.15s;
  padding: var(--scale-400) var(--scale-500);
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--scale-100);
}
`;
    if (size === 'sm') css += `.btn-sm { padding: var(--scale-300) var(--scale-400); font-size: 14px; }\n`;
    if (size === 'md') css += `.btn-md { padding: var(--scale-400) var(--scale-500); font-size: 16px; }\n`;
    if (size === 'lg') css += `.btn-lg { padding: var(--scale-500) var(--scale-600); font-size: 18px; }\n`;
    if (size === 'xs') css += `.btn-xs { padding: var(--scale-200) var(--scale-300); font-size: 12px; }\n`;
    if (variant === 'primary') {
      css += `.btn-primary { background: var(--surface-primary-action); color: var(--text-on-action); }\n`;
      css += `.btn-primary.is-hover { background: var(--surface-primary-action-hover); }\n`;
      css += `.btn-primary.is-pressed { background: var(--surface-primary-action-pressed); }\n`;
      css += `.btn-primary.is-disabled, .btn-primary[disabled] { background: var(--surface-disabled); color: var(--text-disabled); }\n`;
    }
    if (variant === 'secondary') {
      css += `.btn-secondary { background: var(--surface-secondary-action); color: var(--text-action); border: 1.5px solid var(--border-primary); }\n`;
      css += `.btn-secondary.is-hover { background: var(--surface-secondary-action-hover); }\n`;
      css += `.btn-secondary.is-pressed { background: var(--surface-secondary-action-pressed); }\n`;
      css += `.btn-secondary.is-disabled, .btn-secondary[disabled] { background: var(--surface-disabled); color: var(--text-disabled); border-color: var(--border-disabled); }\n`;
    }
    if (variant === 'tertiary') {
      css += `.btn-tertiary { background: transparent; color: var(--text-action); border: 1.5px solid transparent; }\n`;
      css += `.btn-tertiary.is-hover { background: var(--surface-primary-light); }\n`;
      css += `.btn-tertiary.is-pressed { background: var(--primary-200); }\n`;
      css += `.btn-tertiary.is-disabled, .btn-tertiary[disabled] { color: var(--text-disabled); background: transparent; }\n`;
    }
    if (variant === 'quaternary') {
      css += `.btn-quaternary { background: var(--btn-quaternary, var(--neutral-100)); color: var(--text-action); border: 1.5px solid var(--border-primary-light); }\n`;
      css += `.btn-quaternary.is-hover { background: var(--btn-quaternary-hover, var(--neutral-200)); }\n`;
      css += `.btn-quaternary.is-pressed { background: var(--btn-quaternary-pressed, var(--neutral-300)); }\n`;
      css += `.btn-quaternary.is-disabled, .btn-quaternary:disabled { background: var(--btn-disabled); color: var(--text-on-disabled); cursor: not-allowed; }\n`;
    }
    if (variant === 'error') {
      css += `.btn-error { background: var(--btn-error, var(--error-default)); color: var(--text-error); }\n`;
      css += `.btn-error.is-hover { background: var(--btn-error-hover, var(--error-700)); }\n`;
      css += `.btn-error.is-pressed { background: var(--btn-error-pressed, var(--error-500)); }\n`;
      css += `.btn-error.is-disabled, .btn-error:disabled { background: var(--btn-disabled); color: var(--text-on-disabled); cursor: not-allowed; }\n`;
    }
    if (variant === 'success') {
      css += `.btn-success { background: var(--btn-success, var(--success-default)); color: var(--text-success); }\n`;
      css += `.btn-success.is-hover { background: var(--btn-success-hover, var(--success-700)); }\n`;
      css += `.btn-success.is-pressed { background: var(--btn-success-pressed, var(--success-500)); }\n`;
      css += `.btn-success.is-disabled, .btn-success:disabled { background: var(--btn-disabled); color: var(--text-on-disabled); cursor: not-allowed; }\n`;
    }
    if (variant === 'alert') {
      css += `.btn-alert { background: var(--btn-alert, var(--alert-default)); color: var(--text-alert); }\n`;
      css += `.btn-alert.is-hover { background: var(--btn-alert-hover, var(--alert-700)); }\n`;
      css += `.btn-alert.is-pressed { background: var(--btn-alert-pressed, var(--alert-500)); }\n`;
      css += `.btn-alert.is-disabled, .btn-alert:disabled { background: var(--btn-disabled); color: var(--text-on-disabled); cursor: not-allowed; }\n`;
    }
    if (showLeadingIcon || showTrailingIcon) {
      css += `.btn-icon { display: inline-flex; align-items: center; margin-right: var(--scale-100); }\n`;
    }
    return css;
  }
  if (component === 'checkbox') {
    const { size, state } = options;
    let css = `.checkbox {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background: var(--neutral-white);
  border: 1.5px solid var(--color-border);
  transition: border 0.15s, box-shadow 0.15s, background 0.15s;
  cursor: pointer;
}
`;
    if (size === 'sm') css += `.checkbox-sm { width: 16px; height: 16px; border-radius: 2px; }\n`;
    if (size === 'md') css += `.checkbox-md { width: 20px; height: 20px; border-radius: 6px; }\n`;
    if (size === 'lg') css += `.checkbox-lg { width: 24px; height: 24px; border-radius: 8px; }\n`;
    css += `.checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
}
`;
    css += `.checkbox-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; height: 100%;
  pointer-events: none;
}
`;
    css += `.checkbox.is-selected,
.checkbox input[type="checkbox"]:checked + .checkbox-custom {
  background: var(--surface-primary-action);
  border-color: var(--border-primary);
}
`;
    css += `.checkbox.is-selected .checkbox-custom svg,
.checkbox input[type="checkbox"]:checked + .checkbox-custom svg {
  color: var(--text-on-action);
}
`;
    css += `.checkbox.is-indeterminate,
.checkbox input[type="checkbox"][data-indeterminate="true"] + .checkbox-custom {
  background: var(--surface-primary-action);
  border-color: var(--border-primary);
}
`;
    css += `.checkbox.is-indeterminate .checkbox-custom svg,
.checkbox input[type="checkbox"][data-indeterminate="true"] + .checkbox-custom svg {
  color: var(--text-on-action);
}
`;
    css += `.checkbox.is-hover { border-color: var(--border-action-hover); }
`;
    css += `.checkbox.is-focus { box-shadow: 0 0 0 2px var(--surface-primary-light); }
`;
    css += `.checkbox.is-error { border-color: var(--border-error); }
`;
    css += `.checkbox.is-disabled,
.checkbox input[type="checkbox"]:disabled + .checkbox-custom {
  background: var(--surface-disabled);
  border-color: var(--border-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}
`;
    css += `.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
}
`;
    css += `.checkbox-label input[type="checkbox"]:focus + .checkbox-custom {
  outline: 2px solid var(--primary-100);
  outline-offset: 2px;
}
`;
    return css;
  }
  // Add more components as needed
  return '';
}

export default getComponentCSSString; 