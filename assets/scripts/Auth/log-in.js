// import token from "./token.js";
import apiUrl from "../config.js";
import config from "../store.js";
import ticTacToe from "../Board/board.js";
import logOut from "../Auth/log-out.js";

let loginUpEvents = (data) => {
  config.user = data.user;
  $("#changePasswords").show();
  $("#theGame").html(`
          <div class="justify-content-center shadow align-items-center container top-100" style="width:500px" id="aydio">
                <div class="input-group">  
                <input type="text" id="dimension" placeholder="Insert Tic Tac Toe dimension" class="form-control">              
                <span class="input-group-btn">
                    <button class="btn btn-primary" id="showBoard">Create Board</button>
                </span>
            </div>
        <table id="tictactoe" class="ttt">
        </table>
    </div>
        `);

  ticTacToe();
  $("#user-menu").append(`<li>
                <a id="log-out">Log Out</a>
              </li>`);

  $("#user-menu").append(`<li>
                <a id="password-changed" data-toggle="modal" data-target="#exampleModal">Change Password</a>
              </li>`);
  logOut();
  $("#userAuthentication").hide();
  $("form").trigger('reset');
  $("#userLoged").text(config.user.email);
  $("#menu").show();

}

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
      .then(data => {
        loginUpEvents(data);
      })
      .catch(() => {
        console.log("Error");
      });
  });
};

export default { logIn,loginUpEvents };
