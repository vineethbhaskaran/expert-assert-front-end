import React, { Component } from "react";

export class LogoutButton extends Component {
  render() {
    return (
      <button className="dropdown-item" onClick={this.props.auth.logout}>
        <i className="feather icon-power"></i> Logout
      </button>
    );
  }
}

export default LogoutButton;
