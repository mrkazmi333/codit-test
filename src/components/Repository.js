import React, { Component } from "react";
import { connect } from "react-redux";
import { getCommitCount } from "../actions";

class Repository extends Component {
  componentDidMount() {
    console.log("check props", this.props.repo.name);
    console.log("user", this.props.user.login);
    // this.props.dispatch(
    //   getCommitCount(this.props.repo.name, this.props.user.login)
    // );
  }

  render() {
    const { repo } = this.props;
    return (
      <div className="repository">
        <h4>{repo.name}</h4>
        <p>Forks:{repo.forks}</p>
        <p>Issues: {repo.open_issues_count}</p>
        <p>Watchers: {repo.watchers}</p>
      </div>
    );
  }
}

function mapStateToProps({ searchUser }) {
  return {
    searchUser,
  };
}
export default connect(mapStateToProps)(Repository);
