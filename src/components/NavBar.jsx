import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="flex flex-col ">
        <a href="##" className="ml-[3.15rem] mr-auto text-[green]">
          Git Explorer
        </a>
        <div className=" flex flex-row justify-around  gap-2 mr-[3.15rem] w-1/5">
          <a href="##">Repos</a>
          <a href="##">Users</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
