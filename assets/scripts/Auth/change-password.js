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
        header: "Content-Type: application/json",
        data: {
          passwords: {
            old: serialization[0].value,
            new: serialization[1].value
          }
        },
      })
      .then((data) => {
        // config.user = data.user;
        // window.location.href = "/assets/Views/loged.html";
        console.log(data);
      })
      .catch(() => {
        console.log("Error");
      });
  });
}

export default changePassword;
