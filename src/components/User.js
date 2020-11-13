import React, { Component } from "react";

class User extends Component {
  render() {
    const { user, repos } = this.props;
    return (
      <div className="user-container">
        <img src={user.avatar_url} alt="user-img" />
        <div className="user-detail">
          <h4>Name: {user.name}</h4>
          <h4>Followers: {user.followers}</h4>
          <h4>Following: {user.following}</h4>
          <h4>Number of Public Repositories: {repos.length}</h4>
        </div>
      </div>
    );
  }
}

export default User;
