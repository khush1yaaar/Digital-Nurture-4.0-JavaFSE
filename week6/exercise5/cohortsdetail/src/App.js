import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    {
      id: 1,
      name: 'Web Development 2023',
      startDate: '2023-01-15',
      endDate: '2023-07-15',
      studentCount: 25,
      status: 'ongoing' // Fixed typo
    },
    {
      id: 2,
      name: 'Data Science 2022',
      startDate: '2022-06-01',
      endDate: '2022-12-01',
      studentCount: 18,
      status: 'completed'
    }
  ];

  return (
    <div className="App">
      <h1>Cohort Details</h1>
      {cohorts.map(cohort => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;