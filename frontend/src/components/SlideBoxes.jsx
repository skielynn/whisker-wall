import React from 'react';

const boxes = [
  { id: 1, icon: '✉️', title: 'Letters',   text: 'Heartfelt letters of support.' },
  { id: 2, icon: '🕯️', title: 'Candle',    text: 'Light a candle in memory or hope.' },
  { id: 3, icon: '🐾', title: 'Resources',  text: 'Helpful guides and support links.' },
  { id: 4, icon: '👥', title: 'Community',  text: 'Connect with others on the journey.' },
  { id: 5, icon: '🖼️', title: 'Gallery',   text: 'Photos celebrating our companions.' },
  { id: 6, icon: '❓', title: 'FAQ',        text: 'Answers to common questions.' },
  { id: 7, icon: '📝', title: 'Share Story', text: 'Submit your own story.' },
  { id: 8, icon: '📚', title: 'Articles',    text: 'Learn from vetted sources.' },
];

export default function SlideBoxes() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))', 
        gap: '1rem'
      }}
    >
      {boxes.map(box => (
        <div
          key={box.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: 12,
            padding: 20,
            background: '#f9f9f9',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 150 
          }}
        >
          <div style={{ fontSize: 40 }}>{box.icon}</div>
          <h3 style={{ margin: '10px 0 6px', fontSize: 16 }}>{box.title}</h3>
          <p style={{ color: '#555', fontSize: 13, margin: 0 }}>{box.text}</p>
        </div>
      ))}
    </div>
  );
}
