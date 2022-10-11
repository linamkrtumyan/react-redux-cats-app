import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Cats from "./pages/Cats/Cats";

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Cats />} />
      </Routes>
    </div>
  );
}

export default App;
