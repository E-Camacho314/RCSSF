import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getPartyColor } from "./PartyData";
import { stateNumberToState } from "./Data";
import CandidateBox from "./CandidateBox";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import districtsGeoJson from "./Assets/Data/merged_simplified_districts.geojson";

const CongressionalMap = ({ stateResults, candidates, year }) => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [highlightedDistrict, setHighlightedDistrict] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Component mounted");
    console.log("State Results:", stateResults);
    console.log("Candidates:", candidates);
    console.log("GeoJSON Data:", districtsGeoJson);
  }, []);

  const getWinner = (district) => {
    const raceResult = stateResults[district];

    if (!raceResult) {
      console.log(`No race result found for district: ${district}`);
      return "No Election";
    }

    if (Array.isArray(raceResult)) {
      const sortedCandidates = [...raceResult].sort((a, b) => b.votes - a.votes);
      if (sortedCandidates.length > 1 && sortedCandidates[0].votes === sortedCandidates[1].votes) {
        console.log(`Tie in district: ${district}`);
        return "Tie";
      }
      console.log(`Winner in district ${district}:`, sortedCandidates[0].party);
      return sortedCandidates[0].party;
    }

    console.log(`Invalid result data for district: ${district}`);
    return "Invalid Result Data";
  };

  const handleMouseEnter = (geo, event) => {
    const stateFips = geo.properties?.stateFP; // Extract the FIPS code from the GeoJSON
    const districtName = geo.properties?.NAMELSAD || geo.name;
    const stateAbbreviation = stateNumberToState[stateFips]; // Get state abbreviation from the FIPS code

    console.log(`Mouse entered district: ${districtName} (State: ${stateAbbreviation})`);
    setHoveredDistrict(districtName);
    setHighlightedDistrict(districtName);

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
    console.log("Mouse left the district area");
    setHoveredDistrict(null);
    setHighlightedDistrict(null);
  };

  const handleClick = (geo) => {
    const stateFips = geo.properties?.stateFP; // Extract the FIPS code
    const districtName = geo.properties?.NAMELSAD || geo.name;
    const stateAbbreviation = stateNumberToState[stateFips]; // Get state abbreviation
    const winner = getWinner(districtName);

    if (winner !== "No Election") {
      console.log(`Navigating to district: ${districtName} (State: ${stateAbbreviation})`);
      navigate(`/elections/${year}/House/${districtName}`); // Navigate to district details
    }
  };

  const handleMouseMove = (event) => {
    const boxWidth = 300;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    let xOffset = 20;
    let yOffset = 20;

    let adjustedX = cursorX + xOffset;
    if (adjustedX + boxWidth > screenWidth) {
      adjustedX = cursorX - boxWidth - xOffset;
    }

    let adjustedY = cursorY + yOffset;
    if (adjustedY + 100 > screenHeight) {
      adjustedY = screenHeight - 120;
    }

    setBoxPosition({
      x: adjustedX,
      y: adjustedY,
    });
  };

  return (
    <div style={styles.map} onMouseMove={handleMouseMove}>
      <ComposableMap projection="geoAlbersUsa" width={5000} height={2500}>
        <Geographies geography={districtsGeoJson}>
          {({ geographies }) => {
            console.log("GeoJSON Geographies:", geographies);

            return geographies.map((geo) => {
              const districtName = geo.properties?.NAMELSAD || geo.name;
              const stateFips = geo.properties?.stateFP; // Extract the FIPS code
              const stateAbbreviation = stateNumberToState[stateFips]; // Get the state abbreviation
              const winner = getWinner(districtName);
              const fillColor = getPartyColor(winner);
              const isHighlighted = highlightedDistrict === districtName;

              console.log(`Rendering district: ${districtName} (State: ${stateAbbreviation}) with color: ${fillColor}`);

              return (
                <Geography
                  key={districtName}
                  geography={geo}
                  stroke="#fff"
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
                  }}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(geo)}
                />
              );
            });
          }}
        </Geographies>
      </ComposableMap>
      {hoveredDistrict && (
        <CandidateBox
          hoveredState={hoveredDistrict}
          boxPosition={boxPosition}
          candidates={candidates}
          stateResults={stateResults}
          race="House"
        />
      )}
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

export default CongressionalMap;
