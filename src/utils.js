
export const getWinner = (stateName, stateResults, nameToStateCode) => {
    const stateCode = nameToStateCode[stateName];
    const results = stateResults[stateCode];
  
    if (!results || results === "No Election") {
      return "No Election";
    }
  
    if (Array.isArray(results)) {
      const sortedCandidates = results.sort((a, b) => b.votes - a.votes);
      return sortedCandidates[0]?.party || "Tie";
    }
  
    return "Invalid result data";
  };
  