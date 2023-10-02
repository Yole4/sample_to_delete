import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Petter from "./components/pages/Petter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Petter /> } />
      </Routes>
    </Router>
  );
}

export default App;
