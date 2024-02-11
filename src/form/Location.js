import React, { useState } from 'react';
import './Location.css';

const Location = () => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted location:', location);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Location;
