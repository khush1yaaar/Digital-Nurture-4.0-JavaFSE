import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  // Counter state
  const [count, setCount] = useState(0);
  
  // Methods for increment button
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };
  
  const handleIncrement = () => {
    incrementCount();
    sayHello();
  };
  
  // Method with parameter
  const greetUser = (message) => {
    alert(`${message} to our Event Examples App!`);
  };
  
  // Synthetic event handler
  const handleClick = (e) => {
    console.log("I was clicked", e);
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>Event Examples</h1>
      
      <div className="counter-section">
        <h2>Counter Example</h2>
        <p>Current Count: {count}</p>
        <div className="button-group">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
      </div>
      
      <div className="greeting-section">
        <h2>Greeting Example</h2>
        <button onClick={() => greetUser("Welcome")}>Say Welcome</button>
      </div>
      
      <div className="synthetic-event-section">
        <h2>Synthetic Event Example</h2>
        <button onClick={handleClick}>Click Me</button>
      </div>
      
      <CurrencyConvertor />
    </div>
  );
}

export default App;