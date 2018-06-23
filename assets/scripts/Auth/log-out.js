import config from "../store.js";
import apiUrl from "../config.js";


let logOutEvents = () => {
  delete config.user;
  $("#theGame").html('');
  $("#loging-Out").html('');
  $("#userAuthentication").show();
  $("#menu").hide();
  $("#userLoged").text('');
}

let logOut = () => {
  $("#log-out").on("click", () => {
    // event.preventDefault();
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
        alert("error loging out user");
      });
  });
};

export default logOut;
