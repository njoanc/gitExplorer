import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [repos, setRepos] = useState(null);
  const navigate = useNavigate();

  const getRepos = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=XXX"
    );
    console.log(response.data.items);
    setRepos(response.data.items);
  };

  useEffect(() => {
    getRepos().catch((e) => console.error(e));
  }, []);

  return (
    <div className=" flex mt-[3.13rem] flex-wrap">
      {repos ? (
        repos.map((repo) => (
          <div
            className="flex justify-center items-center w-1/5 px-10 py-10 flex-col md:w-full"
            key={repo.id}
          >
            console.log(repo)
            <img
              src={repo.owner.avatar_url}
              alt="userAvatar"
              className="w-[5rem]"
            />
            <span>{repo.name}</span>
            <span>Language{repo.language}</span>
            <div>
              By: <button className="">{repo.owner.login}</button>
            </div>
            <div>
              <button
                onClick={() =>
                  navigate(`/repoDetail/${repo.name}/${repo.owner.login}`)
                }
              >
                View Repo
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>Looding...</h1>
      )}
    </div>
  );
};

export default Home;
