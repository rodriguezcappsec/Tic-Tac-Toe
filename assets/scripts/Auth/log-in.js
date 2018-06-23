// import token from "./token.js";
import apiUrl from "../config.js";
import config from "../store.js";
import ticTacToe from "../Board/board.js";
import logOut from "../Auth/log-out.js";


let loginUpEvents = (data) => {
  config.user = data.user;
  $("#theGame").html(`
          <div class="justify-content-center shadow align-items-center container top-100" id="aydio">
                <div class="input-group">  
                <input type="text" id="dimension" placeholder="Insert Tic Tac Toe dimension" class="form-control">              
                <span class="input-group-btn">
                    <button class="btn btn-primary" id="showBoard">Generate</button>
                </span>
            </div>
        <table id="tictactoe" class="ttt">
        </table>
    </div>
        `);

  ticTacToe();
  console.log(data);
  $("#loging-Out").append(`<li>
                <a id="log-out">Log Out</a>
              </li>`);
  logOut();
  $("#userAuthentication").hide();
  $("form").trigger('reset');
  $("#userLoged").text(data.user.email);
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

export default logIn;
