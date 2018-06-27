import createGame from "./createGameApi";
import ticTacToe from "./board";
import savedGames from "./savedGames.js";

let gameOptions = () => {
  $('#RenderGame').append( /*html*/ `
  <div class="col-md-3 shadow top-100 " id="gameOptions">
      <div class="shadow">
          <h5 class="font-16">Game options</h5>
          <ul style="list-style:none">
            <li>
              <a id="createGame" href="#">Create Game</a>
            </li>
            </ul>
      </div>
    </div>
  `)

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
    savedGames();
    ticTacToe();
  });
}

export default gameOptions;