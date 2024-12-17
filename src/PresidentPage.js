import React from "react";
import ElectionOverview from "./ElectionOverview";
import { electoralVotes } from "./Data";
import { presidentialResultsProjection, presidentialcandidatesProjection} from "./SampleElectionData";
import { presidentialcandidates2008, presidentialResults2008 } from "./2008ElectionData";
import { presidentialcandidates2012, presidentialResults2012 } from "./2012ElectionData";
import { presidentialcandidates2016, presidentialResults2016 } from "./2016ElectionData";
import { presidentialcandidates2020, presidentialResults2020 } from "./2020ElectionData";
import { presidentialcandidates2024, presidentialResults2024 } from "./2024ElectionData";
import { useParams } from "react-router-dom";
import Map from "./Map";

const PresidentPage = () => {
  const { year } = useParams();
  console.log("Year passed to ElectionPage:", year);
  const dataByYear = {
    "2024": {
      presidentialResults: presidentialResults2024,
      presidentialcandidates: presidentialcandidates2024
    },
    "2020": {
      presidentialResults: presidentialResults2020,
      presidentialcandidates: presidentialcandidates2020
    },
    "2016": {
      presidentialResults: presidentialResults2016,
      presidentialcandidates: presidentialcandidates2016
    },
    "2012": {
      presidentialResults: presidentialResults2012,
      presidentialcandidates: presidentialcandidates2012
    },
    "2008": {
      presidentialResults: presidentialResults2008,
      presidentialcandidates: presidentialcandidates2008
    },
    "projection": {
      presidentialResults: presidentialResultsProjection,
      presidentialcandidates: presidentialcandidatesProjection
    },
  };

  // Retrieve data for the selected year
  const yearKey = dataByYear[year] ? year : "projection";
  const { presidentialResults, presidentialcandidates} = dataByYear[yearKey];

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
      </div>
    </div>
  );  
};

export default PresidentPage;