import React, { useState } from 'react';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    if (isNaN(birthDate)) {
      alert('Please enter a valid date.');
      return;
    }

    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <h4>Enter your date of birth</h4>
        <input
  type="date"
  value={birthdate}
  onChange={(e) => setBirthdate(e.target.value)}
  size="20" 
/>

      </div> <br />
      <button onClick={calculateAge} className="calculate-button">
  Calculate Age
</button>

      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
}

export default AgeCalculator;
