import React from 'react';

const GuestPage = () => {
  const flights = [
    { id: 1, airline: 'Air India', departure: '10:00 AM', arrival: '12:30 PM', price: 4500 },
    { id: 2, airline: 'IndiGo', departure: '02:15 PM', arrival: '04:45 PM', price: 3800 },
    { id: 3, airline: 'SpiceJet', departure: '06:30 PM', arrival: '09:00 PM', price: 4200 },
  ];

  return (
    <div className="guest-page">
      <h2>Available Flights</h2>
      <p>Please login to book tickets</p>
      
      <div className="flight-list">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.airline}</h3>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Price: ₹{flight.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPage;