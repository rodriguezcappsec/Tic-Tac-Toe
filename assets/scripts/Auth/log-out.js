import config from "../store.js";
import apiUrl from "../config.js";

let logOut = () => {
  $("#log-out").on("submit", event => {
    event.preventDefault();
    console.log(config.user.token)
    $.ajax({
        url: apiUrl.apiUrl + "/sign-out",
        method: "DELETE",
        headers: {
          Authorization: "Token token=" + config.user.token
        }
      })
      .then(data => {
        config.user = null;
        alert("user loged out", data);
      })
      .catch((data) => {
        console.log("error loging out user", config.user.token);
      });
  });
};

export default logOut;
