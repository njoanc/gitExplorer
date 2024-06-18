import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login({ setIsLogged, setUsername }) {
  const [username, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const dummyUserObject = {
    username: "njoanc",
    password: "12345",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === dummyUserObject.username &&
      password === dummyUserObject.password
    ) {
      setUsername(username);
      setIsLogged(true);
      navigate("/authProfile");
    } else {
      setErrorMsg("Invalid credentials");
    }
  };
  return (
    <div className="flex  bg-[#f8f8fa]  h-screen">
      <div className="w-1/2 bg-[#171715]"></div>
      <div className="w-1/2 pt-[5rem]">
        <h1 className="text-center pt-[10rem] text-2xl">Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex  flex-col justify-center items-center"
        >
          {/* <span className="text-[red]">{errorMsg}</span> */}
          <div className="flex flex-row gap-2 pt-[2rem]">
            <label htmlFor="username" className="pr-[1rem]">
              Username
            </label>
            <input
              type="text"
              value={username}
              name="username"
              onChange={(e) => {
                setUserEmail(e.target.value);
                setErrorMsg("");
              }}
              placeholder="username"
              className="px-3 py-2 w-[20rem] mb-10"
            />
          </div>
          <div>
            <label htmlFor="password" className="pr-[1rem]">
              Password
            </label>
            <input
              type="text"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg("");
              }}
              placeholder="password"
              className="px-3 py-2 w-[20rem] mb-10"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#090909] text-[white] hover:bg-slate-300 hover:text-slate-950"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
