import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectionChooser = () => {
  const [selectedRace, setSelectedRace] = useState("");
  const navigate = useNavigate();

  // Define the RGBA colors for each election year button
  const buttonColors = {
    President: 'rgba(106, 29, 146, 0.5)',
    House: 'rgba(106, 29, 146, 0.5)',
    Senate: 'rgba(106, 29, 146, 0.5)',
  };

  const handleButtonClick = (race) => {
    const lowercaseRace = race.toLowerCase();
    setSelectedRace(lowercaseRace);
    navigate(`/projection/${lowercaseRace}`);
  };

  const races = ["President", "Senate", "House"]; // Array of election years

  return (
    <div className="election-chooser">
      <div className="button-bar">
        {races.map((race) => (
          <button
            key={race}
            className={`election-button ${selectedRace === race ? 'selected' : ''}`}
            style={{ backgroundColor: buttonColors[race] }} // Apply the unique color
            onClick={() => handleButtonClick(race)}
          >
            {race}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectionChooser;
