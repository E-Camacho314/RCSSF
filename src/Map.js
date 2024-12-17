import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getPartyColor } from "./PartyData";
import { nameToStateCode } from "./Data";
import CandidateBox from "./CandidateBox";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const countryUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const smallerStates = [
  { name: "Rhode Island", x: 750, y: 200 },
  { name: "Delaware", x: 780, y: 200 },
  { name: "Connecticut", x: 750, y: 240 },
  { name: "New Jersey", x: 780, y: 240 },
  { name: "Vermont", x: 750, y: 280 },
  { name: "New Hampshire", x: 780, y: 280 },
  { name: "District of Columbia", x: 750, y: 320 },
  { name: "Massachusetts", x: 780, y: 320 },
];

const Map = ({ stateResults, race, candidates, year }) => {
    const [hoveredState, setHoveredState] = useState(null);
    const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
    const [highlightedState, setHighlightedState] = useState(null);
    const navigate = useNavigate();

    const getWinner = (state) => {
      const stateCode = nameToStateCode[state];
      const raceResult = stateResults[stateCode];
  
      // Handle cases where no election was held
      if (raceResult === "No Election") {
          return "No Election";
      }
  
      // Ensure raceResult is an array of candidates
      if (Array.isArray(raceResult)) {
          // Sort candidates by votes in descending order
          const sortedCandidates = [...raceResult].sort((a, b) => b.votes - a.votes);
  
          // Check if there's a tie for the highest votes
          if (
              sortedCandidates.length > 1 &&
              sortedCandidates[0].votes === sortedCandidates[1].votes
          ) {
              return `${state}: It's a tie between ${sortedCandidates
                  .filter(c => c.votes === sortedCandidates[0].votes)
                  .map(c => c.party)
                  .join(", ")}`;
          }
  
          // Return the party of the candidate with the most votes
          return sortedCandidates[0].party;
      }
  
      // Handle unexpected data format
      return `${state}: Invalid result data`;
  };  

    const handleMouseEnter = (geo, event) => {
        const stateName = geo.properties ?.name || geo.name;
        const stateCode = nameToStateCode[stateName];
        setHoveredState(stateName);
        setHighlightedState(stateCode);  // Highlight the state by its code

        const cursorX = event.clientX;
        const cursorY = event.clientY;
        const boxWidth = 300;
        const screenWidth = window.innerWidth;
        let xOffset = 200;
        if (cursorX + boxWidth + xOffset > screenWidth) {
            xOffset = -xOffset;
        }
        setBoxPosition({ x: cursorX + xOffset, y: cursorY });
    };
    
      const handleMouseLeave = () => {
        setHoveredState(null);
        setHighlightedState(null);
      };

      const handleClick = (geo) => {
          const stateName = geo.properties?.name || geo.name;
          const stateCode = nameToStateCode[stateName];
          
          // Check if the state has an election
          const winner = getWinner(stateName);
          if (stateCode && winner !== "No Election") {
              navigate(year ? `/elections/${year}/${race}/${stateCode}` : `/projection/${race}/${stateCode}`); // Navigate to the dynamic URL
          }
      };
    
      
      const handleMouseMove = (event) => {
        const boxWidth = 300; // Width of the candidate box
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const cursorX = event.clientX;
        const cursorY = event.clientY;
    
        let xOffset = 20; // Default offset to the right
        let yOffset = 20; // Small vertical offset for positioning below the cursor
    
        // Adjust xOffset if the box would overflow the right side
        let adjustedX = cursorX + xOffset;
        if (adjustedX + boxWidth > screenWidth) {
            adjustedX = cursorX - boxWidth - xOffset; // Flip to the left
        }
    
        // Prevent the box from overflowing the bottom of the screen
        let adjustedY = cursorY + yOffset;
        if (adjustedY + 100 > screenHeight) {
            adjustedY = screenHeight - 120; // Ensure the box stays visible at the bottom
        }
    
        setBoxPosition({
            x: adjustedX,
            y: adjustedY,
        });
    };

    return (
        <div style={styles.map} onMouseMove={handleMouseMove}>
            <ComposableMap projection="geoAlbersUsa" width={800} height={500}>
                <Geographies geography={countryUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const stateName = geo.properties.name;
                            const winner = getWinner(stateName);
                            let fillColor = getPartyColor(winner);
                            const isHighlighted = highlightedState === nameToStateCode[stateName];
                            return (
                                <Geography
                                    key={stateName}
                                    geography={geo}
                                    stroke="#fff"
                                    strokeWidth={0.5}
                                    style={{
                                      default: {
                                          fill: fillColor,
                                          stroke: '#000',
                                          strokeWidth: 0.1,
                                          outline: "none",
                                      },
                                      hover: {
                                          fill: fillColor,
                                          stroke: '#FFF',
                                          strokeWidth: 1.2,
                                          transition: "all 250ms",
                                          outline: "none",
                                      },
                                      pressed: {
                                          fill: fillColor,
                                          stroke: '#FFF',
                                          strokeWidth: 1.8,
                                          outline: "none",
                                      },
                                      // Highlight the state when hovered
                                      highlighted: {
                                          fill: fillColor,
                                          stroke: '#FFF',
                                          strokeWidth: 1.8,
                                          outline: "none",
                                          opacity: isHighlighted ? 1 : 0.7, // Adjust opacity to emphasize hover effect
                                      }
                                    }}
                                    onMouseEnter={(event) => handleMouseEnter(geo, event)} // Pass both geo and event
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick(geo)}
                                />
                            );
                        })
                    }
                </Geographies>
                {smallerStates.map((state) => {
                  const winner = getWinner(state.name);
                  const fillColor = getPartyColor(winner);
                  const isHighlighted = highlightedState === nameToStateCode[state.name];
                  const stateCode = nameToStateCode[state.name]; // Get the state code

                  return (
                      <g key={state.name}>
                          <rect
                              x={state.x}
                              y={state.y}
                              width={20}
                              height={20}
                              fill={fillColor}
                              strokeWidth={0.5}
                              onMouseEnter={(event) => handleMouseEnter(state, event)}
                              onMouseLeave={handleMouseLeave}
                              onClick={() => handleClick(state)}
                              style={{
                                  cursor: "pointer",
                                  transition: "all 250ms",
                                  stroke: isHighlighted ? "#FFF" : "#000", // Highlight the smaller state box on hover
                                  strokeWidth: isHighlighted ? 0.8 : 0.5,
                              }}
                          />
                          <text
                              x={state.x + 10} // Center text horizontally in the box
                              y={state.y + 12} // Center text vertically in the box (adjust based on text size)
                              fill="#FFF"
                              fontSize="10"
                              fontWeight="bold"
                              textAnchor="middle" // Horizontally center the text
                              alignmentBaseline="middle" // Vertically center the text
                          >
                              {stateCode} {/* Display the state code */}
                          </text>
                      </g>
                  );
              })}
            </ComposableMap>
            <CandidateBox
                hoveredState={hoveredState}
                boxPosition={boxPosition}
                candidates={candidates}
                stateResults={stateResults}
                race={race}
            />
        </div>
    );
};

const styles = {
    map: {
        padding: "20px",
        backgroundColor: "transparent",
        textAlign: "center",
        borderRadius: "10px",
        color: "#fff",
    },
};

export default Map;