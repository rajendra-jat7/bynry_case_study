import React, { useState } from 'react';

function SearchFilter({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search profiles..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchFilter;
