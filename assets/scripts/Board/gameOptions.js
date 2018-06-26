import createGame from "./createGame.js";
import ticTacToe from "./board";
import loadGame from "./loadGame.js";
import storedGame from "../storeLoadedGame.js";
import listOfGames from "../listOfGames.js";
let gameOptions = () => {
  $('#RenderGame').append( /*html*/ `
  <div class="col-md-3 shadow top-100 " id="gameOptions">
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
//   <div class="input-group">
//       <span class="input-group-btn">
//           <button class="btn btn-primary" id="showBoard">Create Board</button>
//       </span>
//   </div>
  $("#createGame").on('click', () => {
    $('#Games').remove();
    $('#theGame').remove();
    $("#RenderGame").append( /*html*/ `
    <div id="theGame" class="theGame">
    <div class="col-md-3 shadow top-100" style="width:500px" id="aydio">
        <table id="tictactoe" class="tictactoe">
        </table>
    </div>
    </div>
        `);
    $("#RenderGame").append( /*html*/ `
     <div class="col-md-3 shadow top-100 " id="Games">
      <div class="shadow">
          <h5 class="font-16">Games</h5>
          <ul style="list-style:none" id="list-of-games">
            </ul>
      </div>
    </div>
        `);
    createGame();

    for (let index = 0; index < listOfGames.gameIds.length; index++) {
      $('#list-of-games').append("<li>" +
        `<a class="clickToStart"id="${listOfGames.gameIds[index]}" href="#">${listOfGames.gameIds[index]}</a>` + "</li>")
    }
    ticTacToe();
    loadGame.loadGame();
  });

  $('#loadGame').on('click', () => {
    let tds = $("#tictactoe td")
    loadGame.loadGame();
    console.log(storedGame.cells);
    for (let td = 0; td < tds.length; ++td) {
      tds[td].innerText = storedGame.cells[td] === "" ? " " : storedGame.cells[td];
    }
    console.log(storedGame);
  })
}

export default gameOptions;
