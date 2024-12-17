import React from "react";
import { getPartyRgbaColor, getPartyColor } from "./PartyData";
import Logo from './Assets/Images/RCSSFLogo.png';
import democratsImg from './Assets/Images/Democrats.png';
import republicansImg from './Assets/Images/Republicans.png';
import independentsImg from './Assets/Images/Unknown.png'; // Add image for Independents

const CongressOverview = ({ title, race, currentSeats, demSeatsWon, repSeatsWon, indSeatsWon, totalSeats, demVotes, repVotes, candidates, year }) => {

  const demTotalSeats = race === "Senate"
  ? currentSeats.find(seat => seat.party === "Democratic").seats + demSeatsWon 
  : demSeatsWon;

const repTotalSeats = race === "Senate" 
  ? currentSeats.find(seat => seat.party === "Republican").seats + repSeatsWon 
  : repSeatsWon;

const indTotalSeats = race === "Senate"
  ? currentSeats.find(seat => seat.party === "Independent").seats + indSeatsWon 
  : indSeatsWon;

  const projectedWinner = demTotalSeats > repTotalSeats ? "Democratic Party" : "Republican Party";

  const midpoint = race === "Senate" ? 50 : 218;

  // Calculate percentages for progress bar
  const demPercentage = (demTotalSeats / (midpoint * 2)) * 100;
  const repPercentage = (repTotalSeats / (midpoint * 2)) * 100;
  const indPercentage = (indTotalSeats / (midpoint * 2)) * 100; // Percentage for Independent

  return (
    <div style={styles.electionOverview}>
      <h1>{title}{year ? year : "Projection"}</h1>
      <div style={styles.candidateInfo}>
        {/* Democratic Party Section */}
        <div style={styles.candidate}>
          <div style={{ ...styles.imageBox, backgroundColor: getPartyRgbaColor("Democratic") }}>
            <img 
              src={democratsImg} 
              style={styles.candidateImage} 
              alt="Democratic Party Logo" 
            />
          </div>
          <div style={styles.textBox}>
            <h1>Democratic Party</h1>
            <h2>{demSeatsWon ? demSeatsWon.toLocaleString()  : 0} Seats Won</h2>
            <h3>{demVotes ? demVotes.toLocaleString()  : 0} Total Votes</h3>
            <h3>Total Seats: {demTotalSeats}</h3>
          </div>
        </div>

        {/* Republican Party Section */}
        <div style={styles.candidate}>
          <div style={{ ...styles.imageBox, backgroundColor: getPartyRgbaColor("Republican"), marginLeft: "80px" }}>
            <img 
              src={republicansImg} 
              style={styles.candidateImage} 
              alt="Republican Party Logo" 
            />
          </div>
          <div style={styles.textBox}>
            <h1>Republican Party</h1>
            <h2>{repSeatsWon ? repSeatsWon.toLocaleString()  : 0} Seats Won</h2>
            <h3>{repVotes ? repVotes.toLocaleString()  : 0} Total Votes</h3>
            <h3>Total Seats: {repTotalSeats}</h3>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${demPercentage}%`, backgroundColor: getPartyColor("Democratic") }}></div>
        <div style={styles.midpoint}></div>
        <div style={{ ...styles.progressBar, width: `${indPercentage}%`, backgroundColor: getPartyColor("Independent") }}></div>
        <div style={{ ...styles.progressBar, width: `${repPercentage}%`, backgroundColor: getPartyColor("Republican") }}></div>
      </div>
      <div style={styles.progressLabels}>
        <span>{demTotalSeats ? demTotalSeats.toLocaleString()  : 0} Seats</span>
        <span>{midpoint} Seats</span>
        <span>{repTotalSeats ? repTotalSeats.toLocaleString()  : 0} Seats</span>
      </div>

      <div style={styles.voteProjection}>
        <img 
          src={Logo} 
          alt="RCSSF Logo" 
          style={styles.logo} 
        />
        <h1>
        {year ? `${projectedWinner} won the ${race}.` :`  projects the ${projectedWinner} will win control the ${race}.` }
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
    padding: "5px",
    borderRadius: "0px",
  },
  candidateImage: {
    width: "200px",
    height: "200px",
    borderRadius: "0%",
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

export default CongressOverview;
