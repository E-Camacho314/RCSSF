import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getPartyColor } from "./PartyData";
import { stateCodeToName, stateNumberToState, nameToStateCode } from "./Data";
import CandidateBox from "./CandidateBox";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import districtsJson from "./Assets/Data/corrected_districts.json";

const CongressionalMap = ({ stateResults, candidates, year }) => {
  const [hoveredState, setHoveredState] = useState(null);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const getWinner = useMemo(() => {
    return (state, district) => {
      const stateCode = nameToStateCode[state];
      const stateData = stateResults?.[stateCode];
      if (!stateData) {
        return "State Not Found";
      }
  
      // Find the district object that matches the given district name
      const districtData = stateData.find((d) => d[district]);
      if (!districtData) {
        return "No Election";
      }
  
      const raceResult = districtData[district];
  
      if (Array.isArray(raceResult)) {
        const sortedCandidates = [...raceResult].sort((a, b) => b.votes - a.votes);
  
        if (sortedCandidates[0]?.votes === sortedCandidates[1]?.votes) {
          return "Tie";
        }
  
        return sortedCandidates[0]?.party;
      }
  
      return "Invalid Result Data";
    };
  }, [stateResults]);  

  const handleMouseEnter = (geo, event) => {
    const stateFips = geo.properties.STATEFP;
    const stateCode = stateNumberToState[stateFips];
    const stateName = stateCodeToName[stateCode];
    setHoveredState(stateName);

    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const boxWidth = 300;
    const screenWidth = window.innerWidth;
    const xOffset = cursorX + boxWidth > screenWidth ? -200 : 200;
    setBoxPosition({ x: cursorX + xOffset, y: cursorY });
  };

  const handleMouseLeave = () => setHoveredState(null);

  const handleClick = (geo) => {
    const stateFips = geo.properties.STATEFP;
    const stateCode = stateNumberToState[stateFips];
    const district = geo.properties.CD119FP;
    const winner = getWinner(stateCode, district);

    if (winner !== "No Election") {
      navigate(year ? `/elections/${year}/house/${stateCode}-${district}` : `/projection/house/${stateCode}-${district}`);
    }
  };

  return (
    <div style={styles.map}>
      <ComposableMap projection="geoAlbersUsa" width={800} height={500}>
        <Geographies geography={districtsJson}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateFips = geo.properties.STATEFP;
              const stateCode = stateNumberToState[stateFips];
              const stateName = stateCodeToName[stateCode];
              const district = geo.properties.NAMELSAD;
              const winner = getWinner(stateName, district);
              const fillColor = getPartyColor(winner);

              return (
                <Geography
                  key={stateCode}
                  geography={geo}
                  style={{
                    default: { fill: fillColor, stroke: "#000", strokeWidth: 0.1, outline: "none" },
                    hover: { fill: fillColor, stroke: "#FFF", strokeWidth: 1.2, outline: "none" },
                    pressed: { fill: fillColor, stroke: "#FFF", strokeWidth: 1.8, outline: "none" },
                  }}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(geo)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {hoveredState && (
        <CandidateBox
          hoveredState={hoveredState}
          boxPosition={boxPosition}
          candidates={candidates}
          stateResults={stateResults}
          race={"House"}
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