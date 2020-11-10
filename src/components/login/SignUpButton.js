import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUpButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      className="btn btn-outline-danger btn-block"
    >
      <i className="feather icon-user"></i> Register
    </button>
  );
};
export default SignUpButton;
