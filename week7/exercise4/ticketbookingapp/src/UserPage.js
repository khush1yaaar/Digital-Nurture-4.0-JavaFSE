import React, { useState } from 'react';

const UserPage = () => {
  const flights = [
    { id: 1, airline: 'Air India', departure: '10:00 AM', arrival: '12:30 PM', price: 4500 },
    { id: 2, airline: 'IndiGo', departure: '02:15 PM', arrival: '04:45 PM', price: 3800 },
    { id: 3, airline: 'SpiceJet', departure: '06:30 PM', arrival: '09:00 PM', price: 4200 },
  ];

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passengerName, setPassengerName] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookFlight = (flight) => {
    setSelectedFlight(flight);
    setBookingSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    setBookingSuccess(true);
    setPassengerName('');
  };

  return (
    <div className="user-page">
      <h2>Welcome! Book your flight</h2>
      
      <div className="flight-list">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.airline}</h3>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Price: ₹{flight.price}</p>
            <button onClick={() => handleBookFlight(flight)}>Book This Flight</button>
          </div>
        ))}
      </div>

      {selectedFlight && (
        <div className="booking-form">
          <h3>Booking: {selectedFlight.airline}</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Passenger Name:
              <input
                type="text"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                required
              />
            </label>
            <button type="submit">Confirm Booking</button>
          </form>
          {bookingSuccess && (
            <div className="success-message">
              <p>Booking confirmed for {selectedFlight.airline}!</p>
              <p>Departure: {selectedFlight.departure}</p>
              <p>Total: ₹{selectedFlight.price}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserPage;