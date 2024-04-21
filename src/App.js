// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './components/ProfileCard';
import Map from './components/Map';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      id: 1,
      name: 'Rajendra Jat',
      photo: 'https://example.com/photo1.jpg',
      description: 'Software Engineer',
      address: '123 Main St, City, Country',
    },
    {
      id: 2,
      name: 'Jane Doe',
      photo: 'https://example.com/photo2.jpg',
      description: 'Web Developer',
      address: '456 Elm St, City, Country',
    },
    {
      id: 3,
      name: 'John Doe',
      photo: 'https://example.com/photo1.jpg',
      description: 'Software Engineer',
      address: '123 Main St, City, Country',
    },
    {
      id: 4,
      name: 'Jane Doe',
      photo: 'https://example.com/photo2.jpg',
      description: 'Web Developer',
      address: '456 Elm St, City, Country',
    },
  ];

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} onSummaryClick={handleSummaryClick} />
          ))}
        </div>
        <div className="col-md-6">
          {selectedProfile && <Map location={selectedProfile.address} />}
        </div>
      </div>
    </div>
  );
}

export default App;
