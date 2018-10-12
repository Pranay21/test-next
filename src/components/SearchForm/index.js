import React from "react";

class SearchForm extends React.Component {
  state = {
    searchText: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchText);
  };

  handleChange = e => {
    const searchText = e.target.value;
    this.setState({ searchText });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          className="search-input"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
        <button className="search-button">Search</button>
      </form>
    );
  }
}
export default SearchForm;
