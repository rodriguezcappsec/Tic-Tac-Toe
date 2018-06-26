import getGame from "./getGame.js";
import createGame from "./createGame.js";
import ticTacToe from "./board";
import loadGame from "./loadGame.js";
import storedGame from "../storeLoadedGame.js";

let gameOptions = () => {
  $('#RenderGame').append( /*html*/ `
  <div class="col-md-3 shadow top-100 left-50-percent" id="gameOptions">
      <div class="shadow">
          <h5 class="font-16">Game options</h5>
          <ul style="list-style:none">
            <li>
              <a id="createGame" href="#">Create Game</a>
            </li>
            <li>
              <a id="loadGame" href="#">Load Game</a>
            </li>
            </ul>
      </div>
    </div>
  `)

  $("#createGame").on('click', () => {
    $('#theGame').html('');
    createGame();
    $("#RenderGame").append( /*html*/ `
    <div id="theGame" class="theGame">
    <div class="col-md-3 shadow top-100" style="width:500px" id="aydio">
                <div class="input-group">
                <input type="text" id="dimension" placeholder="Insert Tic Tac Toe dimension" class="form-control">
                <span class="input-group-btn">
                    <button class="btn btn-primary" id="showBoard">Create Board</button>
                </span>
            </div>
        <table id="tictactoe" class="tictactoe">
        </table>
    </div>
    </div>
        `);
    ticTacToe();
  })

  $('#loadGame').on('click', () => {
    let tds = $("#tictactoe td")
    loadGame.loadGame();
    for (let td = 0; td < tds.length; ++td) {
      tds[td].innerText = storedGame.cells[td] === "" ? " " : storedGame.cells[td];
    }
    console.log(storedGame);
  })
}

export default gameOptions;
