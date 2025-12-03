import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./Pages/Login/Login";
import HRPolicy from "./Pages/HRPolicy/HRPolicy";
import EmployeeCatalog from "./Pages/EmployeeCatalog/EmployeeCatalog";
import About from "./Pages/About/About";

function App() {
  // Persistent login state
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Save login state to localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      {/* Pass setIsLoggedIn to Header for logout */}
      {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/hr-policy" /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/hr-policy"
          element={isLoggedIn ? <HRPolicy /> : <Navigate to="/" />}
        />
        <Route
          path="/employees"
          element={isLoggedIn ? <EmployeeCatalog /> : <Navigate to="/" />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
