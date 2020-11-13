import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./components/Search";

class App extends Component {
  render() {
    const { searchUser } = this.props;
    // console.log("search", this.props);
    return (
      <div className="App">
        <Search searchUser={searchUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchUser: state.user,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
