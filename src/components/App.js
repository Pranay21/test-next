import React, { Component } from "react";
import { fetchGhRepos } from "../api/github";
import SearchForm from "./SearchForm";
import RepoList from "./RepoList";

class App extends Component {
  state = {
    repos: []
  };
  handleSubmit = text => {
    fetchGhRepos(text).then(repos => {
      this.setState({ repos });
    });
  };
  render() {
    return (
      <main>
        <SearchForm handleSubmit={this.handleSubmit} />
        <RepoList repos={this.state.repos} />
      </main>
    );
  }
}

export default App;
