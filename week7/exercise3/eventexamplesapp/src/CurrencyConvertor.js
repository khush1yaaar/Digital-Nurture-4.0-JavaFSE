import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');
  const [conversionRate] = useState(0.011); // Approximate conversion rate (1 INR = 0.011 EUR)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rupees) {
      const convertedValue = parseFloat(rupees) * conversionRate;
      setEuros(convertedValue.toFixed(2));
    }
  };

  const handleReset = () => {
    setRupees('');
    setEuros('');
  };

  return (
    <div className="currency-convertor">
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Indian Rupees (₹):
            <input
              type="number"
              value={rupees}
              onChange={(e) => setRupees(e.target.value)}
              placeholder="Enter amount in INR"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Euros (€):
            <input
              type="text"
              value={euros || ''}
              readOnly
              placeholder="Converted amount"
            />
          </label>
        </div>
        <div className="button-group">
          <button type="submit">Convert</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default CurrencyConvertor;