import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="btn btn-outline-primary btn-block">
      <i className="feather icon-unlock"></i> Login
    </button>
  );
};
export default LoginButton;
