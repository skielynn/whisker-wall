import React from 'react';

export default function DecorWrapper({ children, topLeft = '🐾', bottomRight = '🕯️' }) {
  return (
    <section style={{ position: 'relative', padding: '2rem 1rem' }}>
      <div
        style={{
          position: 'absolute',
          left: 12,
          top: 6,
          fontSize: 22,
          opacity: 0.85,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      >
        {topLeft}
      </div>

      <div
        style={{
          position: 'absolute',
          right: 12,
          bottom: 6,
          fontSize: 22,
          opacity: 0.9,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      >
        {bottomRight}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </section>
  );
}
