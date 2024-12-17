import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import ElectionChooser from "./ElectionChooser";
import ProjectionChooser from "./ProjectionChooser";
import Header from "./Header";
import ElectionPage from "./ElectionPage";
import CongressPage from "./CongressPage";
import PresidentPage from "./PresidentPage";
import './App.css';  // Assuming you've placed the CSS file in the same directory

const ElectionsLayout = () => {
  const { year } = useParams();

  return (
    <div>
      <ElectionChooser />
      <ElectionPage year={year} />
    </div>
  );
};

const ProjectionLayout = () => {
  const { race } = useParams();

  const renderPage = () => {
    if (race === "senate" || race === "house") {
      return <CongressPage race={race} />;
    } else if (race === "president") {
      return <PresidentPage />;
    } else {
      return <div>Invalid race parameter</div>;
    }
  };

  return (
    <div>
      <ProjectionChooser />
      {renderPage()}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/projection" element={<ProjectionChooser />} />
          <Route path="/projection/:race" element={<ProjectionLayout />} />
          <Route path="/elections/:year" element={<ElectionsLayout />} />
          <Route path="/elections" element={<ElectionChooser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
