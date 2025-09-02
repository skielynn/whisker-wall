import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedStories from '../components/FeaturedStories';
import SlideBoxes from '../components/SlideBoxes';
import ResourcesStrip from '../components/ResourcesStrip';
import Carousel from '../components/Carousel';
import DecorWrapper from '../components/DecorWrapper';

export default function Home() {
  return (
    <div className="home">
      <HeroSection />

      <section
        style={{
          display: 'flex',
          gap: '1.25rem',
          padding: '2rem 1rem',
          alignItems: 'stretch'
        }}
      >
        <div style={{ flex: '0 0 48%' }}>
          <FeaturedStories />
        </div>
        <div style={{ flex: 1 }}>
          <SlideBoxes />
        </div>
      </section>

      <DecorWrapper topLeft="🐾" bottomRight="🕯️">
        <ResourcesStrip />
      </DecorWrapper>

      <DecorWrapper topLeft="🐾" bottomRight="🕯️">
        <Carousel />
      </DecorWrapper>
    </div>
  );
}
