// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import FormPage from "./pages/Form";
import SignPage from "./pages/Sign";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/sign" element={<SignPage />} />
        {/* Route to the form page */}
      </Routes>
    </Router>
  );
};

export default App;
