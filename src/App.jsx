import "./index.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "./components/About";
import Home from "./components/Home";
import AuthProfile from "./components/AuthProfile";
import Login from "./components/Login";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";
import SearchUser from "./components/SearchUser";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const App = () => {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <SwitchTransition>
      <Routes>
        <Route path="/" element={<NavBar isLogged={isLogged} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users/user/:username" element={<UserProfile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/search" element={<SearchUser />} />
          <Route
            path="/login"
            element={
              <Login setIsLogged={setIsLogged} setUsername={setUsername} />
            }
          />
          <Route
            path="/authProfile"
            element={
              isLogged ? (
                <AuthProfile username={username} />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SwitchTransition>
  );
};

export default App;
