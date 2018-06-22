import apiUrl from "../config.js";
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
            email:serialization[0].value,
            password:serialization[1].value,
            password_confirmation:serialization[2].value
          }
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log("Error");
      });
  });
};

export default signUp;
