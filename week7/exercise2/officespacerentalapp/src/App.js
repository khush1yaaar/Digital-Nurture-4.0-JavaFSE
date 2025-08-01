import React from 'react';
import './App.css';

function App() {
  // Office space image
  const officeImage = {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Modern Office Space"
  };

  // Single office object
  const office = {
    name: "Premium Business Suite",
    rent: 75000,
    address: "123 Business Street, Downtown"
  };

  // List of office spaces
  const officeSpaces = [
    { id: 1, name: "Basic Office", rent: 45000, address: "456 Work Lane" },
    { id: 2, name: "Executive Suite", rent: 85000, address: "789 Corporate Blvd" },
    { id: 3, name: "Shared Workspace", rent: 35000, address: "101 Coworking Ave" },
    { id: 4, name: "Luxury Office", rent: 120000, address: "202 Elite Road" },
    { id: 5, name: "Standard Office", rent: 55000, address: "303 Regular Street" }
  ];

  return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space Rental</h1>
      
      {/* Image with attributes */}
      <img src={officeImage.src} alt={officeImage.alt} className="office-image" />
      
      {/* Single office details */}
      <div className="office-details">
        <h2>{office.name}</h2>
        <p className={`rent ${office.rent > 60000 ? 'high-rent' : 'low-rent'}`}>
          Rent: ₹{office.rent.toLocaleString()}
        </p>
        <p>Address: {office.address}</p>
      </div>
      
      {/* List of office spaces */}
      <h2>Available Office Spaces</h2>
      <div className="office-list">
        {officeSpaces.map(space => (
          <div key={space.id} className="office-item">
            <h3>{space.name}</h3>
            <p className={`rent ${space.rent > 60000 ? 'high-rent' : 'low-rent'}`}>
              Rent: ₹{space.rent.toLocaleString()}
            </p>
            <p>Address: {space.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;