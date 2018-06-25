"use strict";

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
import logInApi from "./Auth/log-in.js";
import ticTacToe from "./Board/board";
import logOut from "./Auth/log-out.js";
import signUpApi from "./Auth/sign-up.js";
import changePasswordApi from "./Auth/change-password.js";
import config from "./store.js";
import getGame from "./Board/getGame.js";
import gameOptions from "./Board/gameOptions.js";
$(() => {
  logInApi.logIn();
  $("#menu").hide();
  // $("#changePasswords").hide();
  // ;
  // getGame();
  signUpApi();
});
