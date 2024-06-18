import "./index.css";
import React, { useState, lazy } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "./components/Home";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const AboutUs = lazy(() => import("./components/About"));
const Users = lazy(() => import("./components/Users"));
const AuthProfile = lazy(() => import("./components/AuthProfile"));
const Login = lazy(() => import("./components/Login"));
const NavBar = lazy(() => import("./components/NavBar"));
const NotFound = lazy(() => import("./components/NotFound"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const SearchUser = lazy(() => import("./components/SearchUser"));

const App = () => {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  return (
    <>
      <NavBar isLogged={isLogged} />
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Routes Location={location}>
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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default App;
