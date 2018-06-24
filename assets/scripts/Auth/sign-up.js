import apiUrl from "../config.js";
import chngPassEvents from "./log-in.js";
import config from "../store.js";


let signUp = () => {
  $("#sign-up").on("submit", event => {
    let serialization = $("#sign-up").serializeArray();
    event.preventDefault();
    console.log(serialization);
    $.ajax({
        url: apiUrl.apiUrl + "/sign-up",
        method: "POST",
        data: {
          credentials: {
            email: serialization[0].value,
            password: serialization[1].value,
            password_confirmation: serialization[2].value
          }
        }
      })
      .then(() => {
        alert("You can now log in with your credentials");
        $('#sign-up').trigger('reset');
        $("#profile-tab").trigger('click');
      })
      .catch(() => {
        alert("Error trying to sign up");
      });
  });
};

export default signUp;
