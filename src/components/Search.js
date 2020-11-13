import React, { Component } from "react";
import { connect } from "react-redux";
import { handleRepoSearch, handleUserSearch } from "../actions";
import RepoList from "./RepoList";
import User from "./User";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleUserSearch(searchText));
    this.props.dispatch(handleRepoSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    const {
      result,
      showSearchResults,
      repoResult: repos,
    } = this.props.searchUser;
    // console.log(this.props.searchUser);
    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Github Username"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>

        {result.message ? (
          <p>No User Found</p>
        ) : result.name ? (
          <User user={result} repos={repos} />
        ) : (
          <p>Search User</p>
        )}
        {repos.message ? (
          <p>No repositories found</p>
        ) : repos.length !== 0 ? (
          <RepoList repos={repos} user={result} />
        ) : (
          <p>Nothing to Display</p>
        )}
        {/* {result.name ? (
          <User user={result} repos={repos} />
        ) : (
          <p>Search User</p>
        )} */}
        {/* {repos.length !== 0 ? (
          <RepoList repos={repos} />
        ) : (
          <p>Nothing to display</p>
        )} */}
      </div>
    );
  }
}

function mapStateToProps({ searchUser }) {
  return {
    searchUser,
  };
}

export default connect(mapStateToProps)(Search);
