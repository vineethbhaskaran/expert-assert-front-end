import React from "react";

const LoginButton = (props) => {
  return (
    <button onClick={props.auth.login} className="btn btn-outline-primary btn-block">
      <i className="feather icon-unlock"></i> Login
    </button>
  );
};
export default LoginButton;
