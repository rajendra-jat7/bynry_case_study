const BASE_URL = 'http://localhost:3001/api/profiles'; // Replace with your backend API URL

// Function to fetch all profiles
export const getAllProfiles = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch profiles');
  }
  return await response.json();
};

// Function to fetch a single profile by ID
export const getProfileById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }
  return await response.json();
};

// Function to add a new profile
export const addProfile = async (profile) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  if (!response.ok) {
    throw new Error('Failed to add profile');
  }
  return await response.json();
};

// Function to update an existing profile
export const updateProfile = async (id, profile) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  if (!response.ok) {
    throw new Error('Failed to update profile');
  }
  return await response.json();
};

// Function to delete a profile
export const deleteProfile = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete profile');
  }
  return await response.json();
};
