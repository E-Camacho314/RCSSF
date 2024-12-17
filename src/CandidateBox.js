import React from "react";
import unknown from "./Assets/Images/Unknown.png";
import { getPartyRgbaColor, getPartyAbbreviation } from "./PartyData";
import { nameToStateCode, electoralVotes } from "./Data";

const CandidateBox = ({ hoveredState, boxPosition, stateResults, candidates, race }) => {
    if (!hoveredState) return null;

    const stateCode = nameToStateCode[hoveredState];
    const raceResult = stateResults[stateCode];
    
    if (raceResult === "No Election") return null;

    const getWinner = (hoveredState) => {
    
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
                return `${hoveredState}: It's a tie between ${sortedCandidates
                    .filter(c => c.votes === sortedCandidates[0].votes)
                    .map(c => c.party)
                    .join(", ")}`;
            }
    
            // Return the party of the candidate with the most votes
            return sortedCandidates[0].party;
        }
    
        // Handle unexpected data format
        return `${hoveredState}: Invalid result data`;
    };  
    
    const sortedCandidates = raceResult.sort((a, b) => b.votes - a.votes);  // Sort by votes in descending order
    
    const winnerParty = getWinner(hoveredState);
    const backgroundColor = "rgba(53, 0, 51, 0.5)"; // Box background color
    
    const boxWidth = 300;
    const baseHeight = 80; // Height for the header and winner's section
    
    const candidateHeight = 25; // Height per candidate (adjust as needed)
    const boxHeight = baseHeight + sortedCandidates.length * candidateHeight; // Dynamically adjust height based on candidates
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let adjustedX = boxPosition.x;
    let adjustedY = boxPosition.y;
    
    if (boxPosition.x + boxWidth > screenWidth) {
        adjustedX = screenWidth - boxWidth - 10;
    }
    
    if (boxPosition.y + boxHeight > screenHeight) {
        adjustedY = screenHeight - boxHeight - 10;
    }
    
    // Get party colors for each candidate
    const partyColors = sortedCandidates.map(candidate => getPartyRgbaColor(candidate.party));
    
    return (
        <div
        style={{
            ...styles.candidateBox,
            backgroundColor,
            top: `${adjustedY}px`,
            left: `${adjustedX}px`,
            width: `${boxWidth}px`,
            height: `${boxHeight}px`,
            position: "absolute",
        }}
        >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px" }}>
        <div style={{ position: "relative", width: "80px", height: "80px" }}>
            {/* Winner's Party Color Box */}
            <div
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: getPartyRgbaColor(winnerParty),
                zIndex: 0,
            }}
            ></div>

            {/* Candidate Image */}
            <img
            src={
                race === "President"
                ? candidates.find(candidate => candidate.party === winnerParty)?.photo || unknown
                : candidates.find(candidate => candidate.party === winnerParty)?.photo || unknown
            }
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: 1,
                objectFit: "cover", // Ensures the image scales to cover the box without distortion
                borderRadius: "0%", // Removes any rounding
            }}
            alt={race === "President" ? "Candidate" : "Party Logo"}
            />
        </div>

        {/* State Name and EV */}
        <div style={{ flexGrow: 1, marginLeft: "15px" }}>
            <h2 style={{ fontSize: "21px", margin: 0 }}>
            {hoveredState} {race === "President" ? ` | ${electoralVotes[stateCode]} EV` : ""}
            </h2>
        </div>
        </div>
        {/* Candidate Bars */}
        <div style={{ maxHeight: `${screenHeight - baseHeight - 20}px`, overflowY: "auto" }}>
            {sortedCandidates.map((candidate, index) => (
            <div
                key={candidate.name}
                style={{
                width: "100%",
                backgroundColor: partyColors[index], // Candidate's party color
                padding: "5px", // Small padding to prevent overflow
                margin: "0", // Remove any margins
                display: "flex",
                justifyContent: "flex-start", // Align text to the left
                alignItems: "center",
                borderRadius: "0px", // No rounded corners
                }}
            >
                <h4
                style={{
                    fontSize: "12px",
                    color: "#fff",
                    margin: 0,
                    fontWeight: index === 0 ? "bold" : "normal", // Bold the first candidate
                }}
                >
                {candidate.name} ({getPartyAbbreviation(candidate.party)}): {candidate.votes.toLocaleString()} votes
                </h4>
            </div>
            ))}
        </div>
        </div>
    );
};

const styles = {
    candidateBox: {
        position: "absolute",
        padding: "10px",
        color: "#fff",
        borderRadius: "0px",
        textAlign: "left",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "transparent", // Fully transparent background
        border: "1px solid rgba(0, 0, 0, 1)", // Optional border to show the box outline
    },
    candidateImage: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
    },
};

export default CandidateBox;