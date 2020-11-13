import React, { Component } from "react";
import Repository from "./Repository";

class RepoList extends Component {
  render() {
    const { repos, user } = this.props;
    return (
      <div className="repo-list-container">
        <ul>
          <h4 className="repo-list-heading">List of Repositories</h4>
          {repos.length !== 0 ? (
            repos.map((repo) => (
              //   <li>
              <a
                href={repo.html_url}
                key={repo.id}
                target="_blank"
                rel="noreferrer"
              >
                <Repository key={repo.id} repo={repo} user={user} />
              </a>
              //   </li>
            ))
          ) : (
            <p>No Repos</p>
          )}
        </ul>
      </div>
    );
  }
}

export default RepoList;
