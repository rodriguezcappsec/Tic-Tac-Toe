"use strict";

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
import logIn from "./Auth/log-in.js";
import ticTacToe from "./Board/board";
import logOut from "./Auth/log-out.js";
import signUp from "./Auth/sign-up.js";
import changePassword from "./Auth/change-password.js";
import config from "./store.js";
$(() => {
  logIn.logIn();
  $("#menu").hide();
  $("#changePasswords").hide();
  changePassword();
  signUp();

});
