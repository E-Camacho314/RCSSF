import React from "react";
import Logo from './Assets/Images/RCSSFLogo.png'; // Correct the path to your image
import { Link } from "react-router-dom";
import { FaHome, FaTv, FaBalanceScale, FaInfoCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        {/* Use the imported logo image */}
        <img src={Logo} alt="RCSSF Logo" style={styles.logoImage} />
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navItem}><FaHome /> Home</Link>
        <Link to="/projection" style={styles.navItem}><FaTv /> Projection 2028</Link>
        <Link to="/elections" style={styles.navItem}><FaBalanceScale /> Past Elections</Link>
        <Link to="/comparison" style={styles.navItem}><FaBalanceScale /> Comparisons</Link>
        <Link to="/about" style={styles.navItem}><FaInfoCircle /> About</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed", 
    width: "100%", // Adjust to full width of the screen
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    background: "rgba(26, 0, 51, 0.4)",
    color: "white",
    top: 0, // Ensure it is positioned at the top of the page
    left: 0, // Align it to the left edge of the page
    zIndex: 1000, // This ensures the header stays on top of other content
  },
  logo: {
    fontSize: "20px",
    marginRight: "80px",
  },
  logoImage: {
    width: "160px", // Increased width to make the logo bigger
    height: "120px", // Keeps the aspect ratio intact
  },
  nav: {
    display: "flex",
    gap: "50px",
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold", // Add this line to make the text bold
  },
};

export default Header;