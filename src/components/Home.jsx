import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [repos, setRepos] = useState(null);

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
              <button>View Repo</button>
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
