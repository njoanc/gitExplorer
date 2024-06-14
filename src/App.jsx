import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, Router } from "react-router-dom";

const Home = () => {
  return <h1>Home Page</h1>;
};

const AboutUs = () => {
  return <h1>About Us Page</h1>;
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
