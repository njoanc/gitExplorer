import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page Not Found</h1>
      <button onClick={() => navigate("/")}>Go back to Home page</button>
    </div>
  );
};

export default NotFound;
