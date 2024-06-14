import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function AuthProfile({ username }) {
  const [userProfile, setUserProfile] = useState({});

  const getUserProfile = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    setUserProfile(response.data);
    return response.data;
  };
  useEffect(() => {
    getUserProfile().catch((error) => console.error(error));
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="uppercase pt-[3rem] text-lg text-gray-900">
        Your profile
      </h2>
      <div className="pt-[2rem]">
        <img src={userProfile.avatar_url} alt="profile picture" />
        <div className="pt-5">
          <span className="hover:text-[blue]">{userProfile.login}</span>
          <h2>{userProfile.name}</h2>
          <div className="flex flex-col">
            <span>
              Company:
              <span className="text-[gray]">{userProfile.company}</span>
            </span>
            <span>
              Public repos:
              <span className="text-[gray]"> {userProfile.public_repos}</span>
            </span>
          </div>
          <h3>
            Company location:
            <span className="text-[gray]">{userProfile.location}</span>
          </h3>
          <div>
            <span>
              Followers:
              <span className="text-[gray]">{userProfile.followers}</span>
            </span>
            <span>
              Following:{" "}
              <span className="text-[gray]">{userProfile.following}</span>
            </span>
          </div>
          <a
            href={userProfile.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-[blue] hover:text-[green]"
          >
            View on Github
          </a>
        </div>
        <div>
          <h3>{userProfile.bio}</h3>
        </div>
      </div>
    </div>
  );
}

export default AuthProfile;
