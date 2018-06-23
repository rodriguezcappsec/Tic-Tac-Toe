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
      .then(data => {
        config.user = data.user;
        alert("Log-In succesful");
        $("#logedUserTictacToe").html(`
        <div class="userInput">
           <input type="text" id="dimension" placeholder="Insert Tic Tac Toe dimension" class="theDimension">
            <button class="createTTTBody" id="showBoard">Generate</button>
        </div>
        <table id="tictactoe" class="ttt">

        </table>
        `);
      })
      .catch(() => {
        console.log("Error");
      });
  });
};

export default logIn;
