import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton(props) {
  const { logout } = useAuth0();
  return (
    <button
      className="dropdown-item"
      onClick={() =>
        logout({
          returnTo: window.location.origin + "/login/",
        })
      }
    >
      <i className="feather icon-power"></i> Logout
    </button>
  );
}

export default LogoutButton;
