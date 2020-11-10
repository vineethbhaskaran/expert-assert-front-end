import auth0 from "auth0-js";
import * as config from "../../config";
require("dotenv").config();

export default class Auth {
  /* constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URL,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    responseType: process.env.REACT_APP_AUTH0_RESPONSE_TYPES,
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(authResults.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem(config.JWT_TOKEN_EXPIRE_AT, expiresAt);
        localStorage.setItem(config.JWT_ACCESS_TOKEN_NAME, authResults.accessToken);
        localStorage.setItem(config.ID_TOKEN_NAME, authResults.idToken);
        this.isAuthenticated();
      } else if (err) {
        console.log("Handle Authorized Error");
        console.log(err);
      }else{
        console.log("Handle Authorized only Refreshing");
      }
    });
  }

  isAuthenticated() {
    let isAuthenticated=false;
    let expireAtObj=localStorage.getItem(config.JWT_TOKEN_EXPIRE_AT);
    if(typeof(expireAtObj)!='undefined' && expireAtObj!=null){
      let expiresAt = JSON.parse(expireAtObj);
      let currentTime = new Date().getTime();
      isAuthenticated = currentTime < expiresAt;
    }
    console.log("IS LOGGED IN: " + isAuthenticated);
    return isAuthenticated;
  }

  logout() {
    localStorage.removeItem(config.JWT_TOKEN_EXPIRE_AT);
    localStorage.removeItem(config.JWT_ACCESS_TOKEN_NAME);
    localStorage.removeItem(config.ID_TOKEN_NAME);
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    });
  }*/
}
