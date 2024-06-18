import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = ({ isLogged }) => {
  return (
    <div>
      <nav className="flex flex-col ">
        <Link to={"/"} className="ml-[3.15rem] mr-auto text-[green]">
          Git Explorer
        </Link>
        <div className=" flex flex-row justify-around  gap-2 mr-[3.15rem] w-1/5">
          <Link to={"/"}>Repos</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/search"}>Search</Link>
          <Link to={"/authProfile"}>Profile</Link>
          {!isLogged && <Link to={"/login"}>Login</Link>}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
