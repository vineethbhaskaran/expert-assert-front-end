import React from "react";

function LogoutButton(props) {
  return (
    <button className="dropdown-item" onClick={props.auth.logout}>
      <i className="feather icon-power"></i> Logout
    </button>
  );
}

export default LogoutButton;
