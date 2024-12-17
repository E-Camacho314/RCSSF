import React from "react";
import CongressOverview from "./CongressOverview";
import { senateResultsProjection, currentSenateProjection, houseResultsProjection } from "./SampleElectionData";
import { useParams } from "react-router-dom";
import CongressionalMap from "./CongressionalMap";
import Map from "./Map";
import democratsImg from './Assets/Images/Democrats.png';
import republicansImg from './Assets/Images/Republicans.png';

const CongressPage = () => {
  const { race } = useParams();
  console.log("Race passed to ElectionPage:", race);
  const senateResults = senateResultsProjection;
  const currentSenate =  currentSenateProjection;
  const houseResults = houseResultsProjection;
  const totalSeats = race === "senate" ? 100 : 435;
  const currentSeats = race === "senate" ? currentSenate : 0;
  const currentRaceResults = race === "senate" ? senateResults : houseResults;

  const calculateSenateVotesByParty = (senateResults, party) => {
    return Object.values(senateResults)
      .flat() // Flatten the array of arrays into a single array
      .filter(senator => senator.party === party)
      .reduce((sum, senator) => sum + senator.votes, 0);
  };
  
  const calculateSeats = (senateResults) => {
      let democraticSeats = 0;
      let republicanSeats = 0;
      let independentSeats = 0;
    
      // Loop through each state in senateResults
      for (const state in senateResults) {
        const results = senateResults[state];
    
        // Skip states with "No Election" data
        if (results === "No Election") continue;
    
        // Get votes for each party
        const demVotes = results.filter(candidate => candidate.party === "Democratic").map(candidate => candidate.votes)[0] || 0;
        const repVotes = results.filter(candidate => candidate.party === "Republican").map(candidate => candidate.votes)[0] || 0;
        const indVotes = results.filter(candidate => candidate.party === "Independent").map(candidate => candidate.votes)[0] || 0;
    
        // Determine the winner of the state and increment the corresponding seat
        if (demVotes > repVotes && demVotes > indVotes) {
          democraticSeats++;
        } else if (repVotes > demVotes && repVotes > indVotes) {
          republicanSeats++;
        } else if (indVotes > demVotes && indVotes > repVotes) {
          independentSeats++;
        }
      }
    
      // Return the seat counts for each party
      return {
        democraticSeats,
        republicanSeats,
        independentSeats,
      };
    };

    const calculateHouseSeats = (houseResults) => {
      let democraticSeats = 0;
      let republicanSeats = 0;
      let independentSeats = 0;
    
      // Loop through each state in houseResults
      for (const state in houseResults) {
        const stateResults = houseResults[state];
    
        // Iterate through each district in the state
        for (const districtResult of stateResults) {
          const districtName = Object.keys(districtResult)[0]; // Get the district name
          const candidates = districtResult[districtName]; // Get the array of candidates
    
          // Skip districts with "No Election" data
          if (candidates === "No Election" || !Array.isArray(candidates)) continue;
    
          // Get votes for each party
          const demVotes = candidates.filter(candidate => candidate.party === "Democratic").map(candidate => candidate.votes)[0] || 0;
          const repVotes = candidates.filter(candidate => candidate.party === "Republican").map(candidate => candidate.votes)[0] || 0;
          const indVotes = candidates.filter(candidate => candidate.party === "Independent").map(candidate => candidate.votes)[0] || 0;
    
          // Determine the winner of the district and increment the corresponding seat
          if (demVotes > repVotes && demVotes > indVotes) {
            democraticSeats++;
          } else if (repVotes > demVotes && repVotes > indVotes) {
            republicanSeats++;
          } else if (indVotes > demVotes && indVotes > repVotes) {
            independentSeats++;
          }
        }
      }
    
      // Return the seat counts for each party
      return {
        democraticSeats,
        republicanSeats,
        independentSeats,
      };
    };

  const { democraticSeats, republicanSeats, independentSeats } = race === "senate" ? calculateSeats(senateResults) : calculateHouseSeats(houseResults);

  const congress = [
    { name: "Democrats", party: "Democratic", photo: democratsImg },
    { name: "Republicans", party: "Republican", photo: republicansImg },
  ];

  const MapComponent = race === "senate" ? Map : CongressionalMap;

  return (
    <div className="container mx-auto px-4 py-8">
      <CongressOverview
        title={`${race.charAt(0).toUpperCase() + race.slice(1)} Race `}
        race={race.charAt(0).toUpperCase() + race.slice(1)}
        currentSeats={currentSeats}
        demSeatsWon={democraticSeats}
        repSeatsWon={republicanSeats}
        indSeatsWon={independentSeats}
        totalSeats={totalSeats}
        demVotes={calculateSenateVotesByParty(senateResults, "Democratic")}
        repVotes={calculateSenateVotesByParty(senateResults, "Republican")}
        candidates={congress}
        year={null}
      />
      <MapComponent
        stateResults={currentRaceResults}
        candidates={congress}
        year={null}
      />
    </div>
  );
};

export default CongressPage;