import React from "react";
import ElectionOverview from "./ElectionOverview";
import CongressOverview from "./CongressOverview";
import { electoralVotes } from "./Data";
import { senateResultsProjection, currentSenateProjection, presidentialResultsProjection, presidentialcandidatesProjection, houseResultsProjection } from "./SampleElectionData";
import { presidentialcandidates2008, presidentialResults2008 } from "./2008ElectionData";
import { presidentialcandidates2012, presidentialResults2012 } from "./2012ElectionData";
import { presidentialcandidates2016, senateResults2016, currentSenate2016, presidentialResults2016 } from "./2016ElectionData";
import { presidentialcandidates2020, presidentialResults2020 } from "./2020ElectionData";
import { presidentialcandidates2024, presidentialResults2024 } from "./2024ElectionData";
import { useParams } from "react-router-dom";
import CongressionalMap from "./CongressionalMap";
import Map from "./Map";
import democratsImg from './Assets/Images/Democrats.png';
import republicansImg from './Assets/Images/Republicans.png';

const ElectionPage = () => {
  const { year } = useParams();
  console.log("Year passed to ElectionPage:", year);
  const dataByYear = {
    "2024": {
      presidentialResults: presidentialResults2024,
      presidentialcandidates: presidentialcandidates2024,
      senateResults: senateResults2016,
      currentSenate: currentSenate2016,
    },
    "2020": {
      presidentialResults: presidentialResults2020,
      presidentialcandidates: presidentialcandidates2020,
      senateResults: senateResults2016,
      currentSenate: currentSenate2016,
    },
    "2016": {
      presidentialResults: presidentialResults2016,
      presidentialcandidates: presidentialcandidates2016,
      senateResults: senateResults2016,
      currentSenate: currentSenate2016,
    },
    "2012": {
      presidentialResults: presidentialResults2012,
      presidentialcandidates: presidentialcandidates2012,
      senateResults: senateResults2016,
      currentSenate: currentSenate2016,
    },
    "2008": {
      presidentialResults: presidentialResults2008,
      presidentialcandidates: presidentialcandidates2008,
      senateResults: senateResults2016,
      currentSenate: currentSenate2016,
    },
    "projection": {
      presidentialResults: presidentialResultsProjection,
      presidentialcandidates: presidentialcandidatesProjection,
      senateResults: senateResultsProjection,
      currentSenate: currentSenateProjection,
      houseResults: houseResultsProjection
    },
  };

  // Retrieve data for the selected year
  const yearKey = dataByYear[year] ? year : "projection";
  const { presidentialResults, presidentialcandidates, senateResults, currentSenate, houseResults} = dataByYear[yearKey];
  
    const calculateSenateVotesByParty = (senateResults, party) => {
    return Object.values(senateResults)
      .flat() // Flatten the array of arrays into a single array
      .filter(senator => senator.party === party)
      .reduce((sum, senator) => sum + senator.votes, 0);
  };

  // Function to calculate the electoral votes for a specific party
  function calculateElectoralVotesByParty(results, electoralVotes, party) {
    let partyVotes = 0;
  
    for (let state in results) {
      // Sort the candidates by votes in descending order
      const stateResults = [...results[state]].sort((a, b) => b.votes - a.votes);
      const stateElectoralVotes = electoralVotes[state];
  
      // Check if the first candidate belongs to the given party
      if (stateResults[0].party === party) {
        partyVotes += stateElectoralVotes;
      }
    }
  
    return partyVotes;
  }  

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
      let democraticHouseSeats = 0;
      let republicanHouseSeats = 0;
      let independentHouseSeats = 0;
    
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
            democraticHouseSeats++;
          } else if (repVotes > demVotes && repVotes > indVotes) {
            republicanHouseSeats++;
          } else if (indVotes > demVotes && indVotes > repVotes) {
            independentHouseSeats++;
          }
        }
      }
    
      // Return the seat counts for each party
      return {
        democraticHouseSeats,
        republicanHouseSeats,
        independentHouseSeats,
      };
    };
    
  

    // Calculate electoral votes for each candidate and sort by votes
    const candidatesWithVotes = presidentialcandidates.map((candidate) => ({
      ...candidate,
      electoralVotes: calculateElectoralVotesByParty(
        presidentialResults,
        electoralVotes,
        candidate.party
      ),
    }));
  
    const sortedCandidates = candidatesWithVotes.sort(
      (a, b) => b.electoralVotes - a.electoralVotes
    );
  
  const [cand1, cand2] = sortedCandidates; // Top two candidates

  const { democraticSeats, republicanSeats, independentSeats } = calculateSeats(senateResults);
  const { democraticHouseSeats, republicanHouseSeats, independentHouseSeats } = calculateHouseSeats(houseResults);

  const congress = [
    { name: "Democrats", party: "Democratic", photo: democratsImg },
    { name: "Republicans", party: "Republican", photo: republicansImg },
  ];

  return (
    <div className="container mx-auto px-4 py-8"> 
      {/* Presidential Election Overview */}
      <div>
        <ElectionOverview
          title={"Presidential Race "}
          election={"Presidency"}
          cand1Results={cand1.electoralVotes}
          cand2Results={cand2.electoralVotes}
          totalVotes={cand1.electoralVotes + cand2.electoralVotes}
          candidates={[cand1, cand2]} // Only the top two candidates
          year={year}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <Map title="Presidential Election" stateResults={presidentialResults} race={"President"} candidates={presidentialcandidates} year={year}/>
  
        {/* Senate Election Overview */}
        <CongressOverview
          title={"Senate Race "}
          race={"Senate"}
          currentSeats={currentSenate}
          demSeatsWon={democraticSeats}
          repSeatsWon={republicanSeats}
          indSeatsWon={independentSeats}
          totalSeats={100}
          demVotes={calculateSenateVotesByParty(senateResults, "Democratic")}
          repVotes={calculateSenateVotesByParty(senateResults, "Republican")}
          candidates={congress}
          year={year}
        />
  
        <Map title="House Election" stateResults={senateResults} race={"Senate"} candidates={congress} year={year}/>
        {/* Senate Election Overview */}
        <CongressOverview
          title={"House Race "}
          race={"House"}
          currentSeats={0}
          demSeatsWon={democraticHouseSeats}
          repSeatsWon={republicanHouseSeats}
          indSeatsWon={independentHouseSeats}
          totalSeats={435}
          demVotes={calculateSenateVotesByParty(senateResults, "Democratic")}
          repVotes={calculateSenateVotesByParty(senateResults, "Republican")}
          candidates={congress}
          year={year}
        />
  
        <CongressionalMap stateResults={houseResults} candidates={congress} year={year}/>
      </div>
    </div>
  );  
};

export default ElectionPage;