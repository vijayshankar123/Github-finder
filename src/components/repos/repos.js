import React from "react";
import RepoItem from "./repositem";
const Repos = ({ repos }) => {
  return (
    <div>
      <h2>Recent 5 Repositories</h2>
      {repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
    </div>
  );
};
export default Repos;
