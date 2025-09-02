import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1 style={{ marginBottom: 8 }}>A safe wall for you and your whiskered loved one</h1>
      <p style={{ color: '#555', marginBottom: 20 }}>
        Hope, resources, and stories for pet parents navigating cancer.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <Link to="/stories">
          <button style={{ padding: '10px 16px', borderRadius: 10, border: 'none', background: '#2563eb', color: 'white' }}>
            Read Stories
          </button>
        </Link>
        <Link to="/letters">
          <button style={{ padding: '10px 16px', borderRadius: 10, border: '1px solid #ddd', background: 'white' }}>
            Share Yours
          </button>
        </Link>
      </div>
    </section>
  );
}