import "./index.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/About";
import Home from "./components/Home";
import AuthProfile from "./components/AuthProfile";
import Login from "./components/Login";

function App() {
  const [username, setEmail] = useState("");
  const [setIsLogged, setUsername] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<AuthProfile username={setEmail} />} />
        <Route
          path="/login"
          element={
            <Login setIsLogged={setIsLogged} setUsername={setUsername} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
