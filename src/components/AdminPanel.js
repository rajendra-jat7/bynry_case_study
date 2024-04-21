import React, { useState } from 'react';
import { addProfile, deleteProfile } from '../services/api';

function AdminPanel({ onProfileAdded, onProfileDeleted, profiles }) {
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const profile = await addProfile(newProfile);
      onProfileAdded(profile);
      setNewProfile({
        name: '',
        photo: '',
        description: '',
        address: '',
      });
    } catch (error) {
      console.error('Error adding profile:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProfile(id);
      onProfileDeleted(id);
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
      <hr />
      <h3>Delete Profile</h3>
      <div>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <p>
              {profile.name} - {profile.address}
            </p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(profile.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
