import React from 'react';

const resources = [
  { id: 1, label: 'Coping Tips' },
  { id: 2, label: 'Find a Vet' },
  { id: 3, label: 'Funding Help' },
  { id: 4, label: 'Nutrition' },
];

export default function ResourcesStrip() {
  return (
    <section style={{ padding: '1.25rem 1rem', background: '#f4f6fb', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ margin: 0, marginBottom: 12, textAlign: 'center' }}>Resources</h2>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {resources.map(r => (
            <button
              key={r.id}
              style={{
                padding: '10px 14px',
                borderRadius: 9999,
                border: '1px solid #d1d5db',
                background: 'white',
                fontSize: 14,
                cursor: 'pointer'
              }}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
