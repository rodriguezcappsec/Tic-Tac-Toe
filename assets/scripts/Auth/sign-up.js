import apiUrl from "../config.js";
import chngPassEvents from "./log-in.js";
import config from "../store.js";
import modalAlert from "../UIBehavior/modalAlert.js";


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
        modalAlert("You can now log in with your credentials","Success!!");
        $('#sign-up').trigger('reset');
        $("#profile-tab").trigger('click');
      })
      .catch(() => {
        modalAlert("An error has occur while trying to sign up, please try again.","Alert!!");
      });
  });
};

export default signUp;
