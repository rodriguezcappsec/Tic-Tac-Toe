"use strict";
import logInApi from "./Auth/log-in.js";
import signUpApi from "./Auth/sign-up.js";

$(() => {
  logInApi.logIn();
  $("#menu").hide();
  signUpApi();
});
