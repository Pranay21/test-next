import React from "react";
import PropTypes from "prop-types";

function renderList(repos = []) {
  if (Array.isArray(repos)) {
    return repos.map(repo => {
      return <li key={repo.name}>{repo.name}</li>;
    });
  } else {
    return <p>Invalid User</p>;
  }
}

const RepoList = props => {
  return <ul className="repo-List">{renderList(props.repos)}</ul>;
};

RepoList.propTypes = {
  respos: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ])
};

export default RepoList;
