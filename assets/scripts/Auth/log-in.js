// import token from "./token.js";
import apiUrl from "../config.js";
import config from "../store.js";
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
      .then((data) => {
        config.user = data.user;
        // window.location.href = "/assets/Views/loged.html";
        console.log(config.user);
      })
      .catch(() => {
        console.log("Error");
      });
  });
};

export default logIn;
