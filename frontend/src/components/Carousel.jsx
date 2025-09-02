import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
  { id: 1, title: 'Community Stories', text: 'Read what others have shared.' },
  { id: 2, title: 'Tips & Guides', text: 'Gentle ideas for tough days.' },
  { id: 3, title: 'Support Links', text: 'Reliable resources curated for you.' },
  { id: 4, title: 'Memorials', text: 'Light and remember together.' },
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <section style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Slider {...settings}>
          {items.map(it => (
            <div key={it.id}>
              <div
                style={{
                  border: '1px solid #ddd',
                  borderRadius: 12,
                  padding: 24,
                  background: '#fafafa',
                  minHeight: 160,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxSizing: 'border-box'
                }}
              >
                <h3 style={{ margin: '0 0 8px' }}>{it.title}</h3>
                <p style={{ margin: 0, color: '#555' }}>{it.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}



