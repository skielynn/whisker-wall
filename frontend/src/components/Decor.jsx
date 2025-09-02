import React from 'react';

export default function Decor({ icon = '🐾', size = 24, style = {} }) {
  return (
    <span
      style={{
        fontSize: size,
        opacity: 0.85,
        pointerEvents: 'none',
        userSelect: 'none',
        ...style
      }}
    >
      {icon}
    </span>
  );
}
