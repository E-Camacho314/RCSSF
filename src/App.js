import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import ElectionChooser from "./ElectionChooser";
import Header from "./Header";
import ElectionPage from "./ElectionPage";
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

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/projection" element={<ElectionPage />} />
          <Route path="/elections/:year" element={<ElectionsLayout />} />
          <Route path="/elections" element={<ElectionChooser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
