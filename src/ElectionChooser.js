import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ElectionChooser = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();

  // Define the RGBA colors for each election year button
  const buttonColors = {
    2008: 'rgba(34, 52, 168, 0.5)',
    2012: 'rgba(34, 52, 168, 0.5)',
    2016: 'rgba(162, 51, 51, 0.5)',
    2020: 'rgba(34, 52, 168, 0.5)',
    2024: 'rgba(162, 51, 51, 0.5)'
  };

  const handleButtonClick = (year) => {
    setSelectedYear(year);
    navigate(`/elections/${year}`);
  };

  const years = [2008, 2012, 2016, 2020, 2024]; // Array of election years

  return (
    <div className="election-chooser">
      <div className="button-bar">
        {years.map((year) => (
          <button
            key={year}
            className={`election-button ${selectedYear === year ? 'selected' : ''}`}
            style={{ backgroundColor: buttonColors[year] }} // Apply the unique color
            onClick={() => handleButtonClick(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElectionChooser;
