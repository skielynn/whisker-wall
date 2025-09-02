import React from 'react';

export default function FeaturedStories() {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 28,
        background: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 565,
        boxSizing: 'border-box',
      }}
    >
      <div style={{ fontSize: 40 }}>🐾</div>
      <h2 style={{ margin: '12px 0 4px' }}>Featured Story</h2>
      <h3 style={{ margin: 0 }}>Bella’s Journey</h3>

      <p style={{ color: '#555', lineHeight: 1.6, marginTop: 10, textAlign: 'center' }}>
        Bella was a joyful, sweet soul who inspired this site. This is just a short snippet to preview her story...
      </p>

      <div style={{ marginTop: 'auto' }}>
        <button
          style={{
            padding: '10px 16px',
            borderRadius: 10,
            border: 'none',
            background: '#2563eb',
            color: 'white'
          }}
        >
          View All Stories
        </button>
      </div>
    </div>
  );
}
