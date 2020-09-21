import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
      <button
      className="dropdown-item"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        <i className="feather icon-power"></i> Logout
      </button>
    );
  };

  export default LogoutButton;