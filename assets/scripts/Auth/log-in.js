let token = "";
let logIn = () => {
  $("#log-In").on("submit", event => {
    let serialization = $("#log-In").serializeArray();
    event.preventDefault();
    $.ajax({
      url: "http://tic-tac-toe.wdibos.com/sign-in",
      method: "POST",
      data: {
        credentials: {
          email: serialization[0].value,
          password: serialization[1].value
        }
      }
    })
      .then(function(data) {
        token = data.user.token;
        console.log(data.user);
      })
      .catch(() => {
        console.log("Error");
      });
  });
};

export default { logIn, token };
