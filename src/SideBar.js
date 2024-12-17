import { nameToStateCode, electoralVotes } from "./Data";

const Sidebar = ({ stateResults, onStateClick }) => {
    const states = Object.keys(stateResults);
  
    return (
      <div style={styles.sidebar}>
        {states.map((stateCode) => (
          <div
            key={stateCode}
            style={styles.stateBox}
            onClick={() => onStateClick(stateCode)} // Handle click to zoom or highlight
          >
            <div style={styles.stateName}>{stateCode}</div>
            <div style={styles.evBoxes}>
              {Array(electoralVotes[stateCode] || 1)
                .fill(null)
                .map((_, index) => (
                  <div key={index} style={styles.evBox}></div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const styles = {
    sidebar: {
      position: "absolute",
      top: "50px",
      left: "10px",
      width: "80px",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: "10px",
      borderRadius: "8px",
      overflowY: "scroll",
      height: "90vh",
    },
    stateBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
      backgroundColor: "#0044cc",
      color: "#fff",
      padding: "5px",
      borderRadius: "4px",
      cursor: "pointer",
      boxShadow: "0px 2px 4px rgba(0,0,0,0.3)",
    },
    stateName: {
      fontSize: "12px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    evBoxes: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)", // Adjust based on design
      gap: "2px",
    },
    evBox: {
      width: "10px",
      height: "10px",
      backgroundColor: "#fff",
      borderRadius: "2px",
    },
  };

  export default Sidebar;