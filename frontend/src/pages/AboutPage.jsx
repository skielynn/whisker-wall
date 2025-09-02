import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios.get('/api/about')
      .then(res => setAboutData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="about-container">
      <h1>About Bella</h1>
      {aboutData ? (
        <>
          <p>{aboutData.description}</p>
          <img src={aboutData.photoUrl} alt="Bella" style={{ maxWidth: '300px' }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AboutPage;
