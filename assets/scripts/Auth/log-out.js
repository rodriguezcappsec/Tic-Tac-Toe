import config from "../store.js";
import apiUrl from "../config.js";
import modalAlert from "../UIBehavior/modalAlert.js";
let logOutEvents = () => {
  delete config.user;
  $("#theGame").html('');
  $("#user-menu").html('');
  $("#userAuthentication").show();
  $("#menu").hide();
  $("#userLoged").text('');
  $('#gameOptions').remove();
  $('#Games').remove();
}

let logOut = () => {
  $("#log-out").on("click", () => {
    event.preventDefault();
    $.ajax({
        url: apiUrl.apiUrl + "/sign-out",
        method: "DELETE",
        headers: {
          Authorization: "Token token=" + config.user.token
        }
      })
      .then(() => {
        logOutEvents();
      })
      .catch((data) => {
        modalAlert("error loging out user","Alert!!");
      });
  });
};

export default logOut;
