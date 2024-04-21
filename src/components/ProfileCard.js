// ProfileCard.js
import React from 'react';

function ProfileCard({ profile, onSummaryClick }) {
  return (
    <div className="card">
      <img src={profile.photo} alt={profile.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">{profile.description}</p>
        <button className="btn btn-primary" onClick={() => onSummaryClick(profile)}>Summary</button>
      </div>
    </div>
  );
}

export default ProfileCard;
