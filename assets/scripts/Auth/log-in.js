// import token from "./token.js";
import apiUrl from "../config.js";
import config from "../store.js";
import ticTacToe from "../Board/board.js";
import logOut from "../Auth/log-out.js";
import modalAlert from "../UIBehavior/modalAlert.js";
import changePassModal from "../UIBehavior/changePasswordModal";
import changePasswordApi from "./change-password.js"
import getGame from "../Board/getGame.js";
import gameFeatures from "../Board/gameFeatures";
// col-md-7 top-100
// justify-content-center shadow align-items-center container top-100
let loginUpEvents = (data) => {
  config.user = data.user;
  $("#userAuthentication").hide();
//   $("#RenderGame").html( /*html*/ `
//   <div id="theGame" class="theGame">
// <div class="col-md-3 top-100" style="width:500px" id="aydio">
//                 <div class="input-group">
//                 <input type="text" id="dimension" placeholder="Insert Tic Tac Toe dimension" class="form-control">
//                 <span class="input-group-btn">
//                     <button class="btn btn-primary" id="showBoard">Create Board</button>
//                 </span>
//             </div>
//         <table id="tictactoe" class="tictactoe">
//         </table>
//     </div>
//     </div>
//         `);
  // ticTacToe();
  $('#RenderGame').append(gameFeatures())
  $("#user-menu").append( /*html*/ `<li>
                <a id="log-out">Log Out</a>
              </li>`);
  changePassModal();
  $("#user-menu").append( /*html*/ `<li>
                <a id="password-changed" data-toggle="modal" data-target="#exampleModal">Change Password</a>
              </li>`);
  changePasswordApi();
  logOut();
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
        modalAlert(`${data.user.email}`, "Welcome")
        loginUpEvents(data);
        console.log(config);
      })
      .catch(() => {
        modalAlert(`One of your credentials is incorrect!`, "Alert!!")
        $("form").trigger('reset');
      });
  });
};

export default {
  logIn,
  loginUpEvents
};
