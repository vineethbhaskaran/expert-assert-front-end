import React from "react";

const SignUpButton = (props) => {
  return (
    <button onClick={props.auth.login} className="btn btn-outline-danger btn-block">
      <i className="feather icon-user"></i> Register
    </button>
  );
};
export default SignUpButton;
