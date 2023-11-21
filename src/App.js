import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage.jsx";
import MethodologiesPage from "./components/MethodologiesPage/MethodologiesPage.jsx";
import SolutionsPage from "./components/SolutionsPage/SolutionsPage.jsx";
import WhoWeArePage from "./components/WhoWeArePage/WhoWeArePage.jsx";
import FormPage from "./components/FormPage/FormPage.jsx";

function App() {
  return (
    <div className="App" id="outer-container">
      <Router>
        <Navbar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <div id="page-wrap"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/metodologias" element={<MethodologiesPage />} />
          <Route path="/quem-somos" element={<WhoWeArePage />} />
          <Route path="/solucoes" element={<SolutionsPage />} />
          <Route path="/agendar" element={<FormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
