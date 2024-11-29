import React from "react";
import { getPartyRgbaColor, getPartyColor } from "./PartyData";
import Logo from './Assets/Images/RCSSFLogo.png';
import unknown from './Assets/Images/Unknown.png';

const ElectionOverview = ({ title, election, cand1Results, cand2Results, totalVotes, candidates, year }) => {
  const projectedWinner = candidates[0].name;

  // Calculate percentages for progress bar
  const cand1Percentage = (cand1Results / 538) * 100;
  const cand2Percentage = (cand2Results / 538) * 100;

  return (
    <div style={styles.electionOverview}>
      <h1>{title}{year ? year : "Projection"}</h1>
      <div style={styles.candidateInfo}>
        <div style={styles.candidate}>
          <div style={{ ...styles.imageBox, backgroundColor: getPartyRgbaColor(candidates[0].party) }}>
            <img 
              src={candidates[0].photo || unknown}
              style={styles.candidateImage} 
              alt={unknown}
            />
          </div>
          <div style={styles.textBox}>
            <h1>{candidates[0].name}</h1>
            <h4>{candidates[0].party}</h4>
            <h2>{cand1Results.toLocaleString()} {election === "Presidency" ? "Electoral Votes" : "Votes"}</h2>
            <h3>{((cand1Results / totalVotes) * 100).toFixed(2)}% Total Votes</h3>
          </div>
        </div>
        <div style={styles.candidate}>
          <div style={{ ...styles.imageBox, backgroundColor: getPartyRgbaColor(candidates[1].party), marginLeft: "80px" }}>
            <img 
              src={candidates[1].photo || unknown}
              style={styles.candidateImage} 
              alt={unknown}
            />
          </div>
          <div style={styles.textBox}>
            <h1>{candidates[1].name}</h1>
            <h4>{candidates[1].party}</h4>
            <h2>{cand2Results.toLocaleString()} {election === "Presidency" ? "Electoral Votes" : "Votes"}</h2>
            <h3>{((cand2Results / totalVotes) * 100).toFixed(2)}% Total Votes</h3>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${cand1Percentage}%`, backgroundColor: getPartyColor(candidates[0].party) }}></div>
        <div style={styles.midpoint}></div>
        <div style={{ ...styles.progressBar, width: `${cand2Percentage}%`, backgroundColor: getPartyColor(candidates[1].party) }}></div>
      </div>
      <div style={styles.progressLabels}>
        <span>{cand1Results.toLocaleString()} Votes</span>
        <span>270 Votes</span>
        <span>{cand2Results.toLocaleString()} Votes</span>
      </div>

      <div style={styles.voteProjection}>
      <img 
        src={Logo} 
        alt="RCSSF Logo" 
        style={styles.logo} 
      />
      <h1>
        {year ? `${projectedWinner} won the ${election}.` :`  projects ${projectedWinner} will win the ${election}.` }
      </h1>
      </div>
    </div>
  );
};

const styles = {
  electionOverview: {
    padding: "20px",
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
  },
  candidateInfo: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  candidate: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    gap: "15px",
    position: "relative", 
  },
  imageBox: {
    padding: "0px",
    borderRadius: "0%",
  },
  candidateImage: {
    width: "200px",
    height: "200px",
    borderRadius: "0%",
    display: "block",
  },
  textBox: {
    color: "white",
  },
  progressBarContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "20px",
    backgroundColor: "#ccc",
    borderRadius: "0px",
    overflow: "hidden",
    margin: "20px 0",
  },
  progressBar: {
    height: "100%",
  },
  midpoint: {
    position: "absolute",
    width: "2px",
    height: "100%",
    backgroundColor: "white",
    left: "50%",
    transform: "translateX(-50%)",
  },
  progressLabels: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0",
    fontSize: "14px",
  },
  voteProjection: {
    marginTop: "20px",
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
  },
  logo: {
    width: "100px",
    height: "70px",
    marginRight: "10px",
  },
};

export default ElectionOverview;