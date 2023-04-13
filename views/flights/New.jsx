import React, { useState } from 'react';

function New() {
  const [formData, setFormData] = useState({
    airline: '',
    flightNo: '',
    departs: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Submit form data to server
  }

  return (
    <div>
      <h1>New Flight</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="airline">Airline:</label>
          <input type="text" name="airline" value={formData.airline} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="flightNo">Flight No.:</label>
          <input type="number" name="flightNo" value={formData.flightNo} onChange={handleChange} min="10" max="9999" required />
        </div>
        <div>
          <label htmlFor="departs">Departs:</label>
          <input type="datetime-local" name="departs" value={formData.departs} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit">Create Flight</button>
        </div>
      </form>
    </div>
  );
}

export default New;
