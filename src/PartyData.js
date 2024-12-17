export const partyData = {
  parties: {
    "Democratic": { 
      color: "#2234A8", // Original hex color
      rgbaColor: "rgba(34, 52, 168, 0.5)", // RGBA color with 80% opacity
      abbreviation: "DEM" 
    },
    "Republican": { 
      color: "#A23333", // Original hex color
      rgbaColor: "rgba(162, 51, 51, 0.5)", // RGBA color with 80% opacity
      abbreviation: "GOP" 
    },
    "Green": { 
      color: "#00FF00", // Original hex color
      rgbaColor: "rgba(50, 205, 50, 0.5)", // RGBA color with 80% opacity
      abbreviation: "GPUS" 
    },
    "Independent": { 
      color: "#6A1D92", // Original hex color
      rgbaColor: "rgba(106, 29, 146, 0.5)", // RGBA color with 80% opacity
      abbreviation: "IND" 
    },
    "Libertarian": {
      color: "#FFD700",
      rgbaColor: "rgba(255, 215, 0, 0.5)",
      abbreviation: "LIB"
    }
  },
  defaultColor: "#555555", // Default hex color
  defaultRgbaColor: "rgba(85, 85, 85, 0.5)", // Default RGBA color
};

export function getPartyColor(party) {
  return partyData.parties[party]?.color || partyData.defaultColor; // Returns hex color
}

export function getPartyRgbaColor(party) {
  return partyData.parties[party]?.rgbaColor || partyData.defaultRgbaColor; // Returns RGBA color
}

export function getPartyAbbreviation(party) {
  return partyData.parties[party]?.abbreviation || party;
}
