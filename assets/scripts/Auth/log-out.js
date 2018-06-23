import config from "../store.js";
import apiUrl from "../config.js";

let logOut = () => {
  $("#log-out").on("submit", event => {
    event.preventDefault();
    $.ajax({
        url: apiUrl.apiUrl + "/sign-out",
        method: "DELETE",
        headers: {
          Authorization: "Token token=" + config.user.token
        }
      })
      .then(() => {
        delete config.user 
        console.log("user loged out", config.user);
      })
      .catch((data) => {
        console.log("error loging out user");
      });
  });
};

export default logOut;
