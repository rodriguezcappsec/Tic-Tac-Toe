import apiUrl from "../config.js";
import config from "../store.js";
import logOut from "../Auth/log-out.js";
import modalAlert from "../UIBehavior/modalAlert.js";
import changePassModal from "../UIBehavior/changePasswordModal";
import changePasswordApi from "./change-password.js"
import gameFeatures from "../Board/gameFeatures.js";
import createGame from '../Board/createGameApi.js';
import oldGamesModal from "../UIBehavior/oldGamesModal.js";

let loginUpEvents = (data) => {
  config.user = data.user;
  $("#userAuthentication").hide();
  $('#RenderGame').append(gameFeatures())
  $("#user-menu").append( /*html*/ `<li>
                <a id="log-out">Log Out</a>
              </li>`);
  changePassModal();

  $("#user-menu").append( /*html*/ `<li>
                <a id="password-changed" data-toggle="modal" data-target="#exampleModal">Change Password</a>
              </li>`);
  changePasswordApi();
  logOut();
  $("form").trigger('reset');
  $("#userLoged").text(config.user.email);
  $("#menu").show();
  createGame();
  // oldGamesModal();
}

let logIn = () => {
  $("#log-In").on("submit", event => {
    let serialization = $("#log-In").serializeArray();
    event.preventDefault();
    $.ajax({
        url: apiUrl.apiUrl + "/sign-in",
        method: "POST",
        data: {
          credentials: {
            email: serialization[0].value,
            password: serialization[1].value
          }
        }
      })
      .then(data => {
        modalAlert(`${data.user.email}`, "Welcome")
        loginUpEvents(data);
        // console.log(config);
      })
      .catch(() => {
        modalAlert(`One of your credentials is incorrect!`, "Alert!!")
        $("form").trigger('reset');
      });
  });
};

export default {
  logIn,
  loginUpEvents
};
