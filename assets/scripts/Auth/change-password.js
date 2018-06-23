import apiUrl from "../config.js";
import config from "../store.js";
let changePassword = () => {
  $("#change-password").on("submit", event => {
    let serialization = $("#change-password").serializeArray();
    event.preventDefault();
    console.log(config.user.token);
    $.ajax({
        url: apiUrl.apiUrl + '/change-password',
        method: 'PATCH',
        headers: {
          Authorization: "Token token=" + config.user.token
        },
        data: {
          passwords: {
            old: serialization[0].value,
            new: serialization[1].value
          }
        },
      })
      .then((data) => {
        alert("password changed!")
      })
      .catch(() => {
        alert("Error changing password");
      });
  });
}

export default changePassword;
