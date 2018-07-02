import createGame from "./createGameApi";
import ticTacToe from "./board";
import savedGames from "./savedGames.js";
import loadGame from "../Board/loadGameApi.js";
let gameOptions = () => {

  $('#RenderGame').append( /*html*/ `
  <div class="col-md-3 shadow top-100 " id="gameOptions" style="margin: 100px 10px 0 10px">
      <div class="shadow" id="createLoadOld">
          <h5 class="font-16">New Game</h5>
          <ul style="list-style:none">
            <li>
              <a id="createGame" href="#">Create Game</a>
            </li>
            </ul>
            <h5 class="font-16">Wins</h5>
            <ul style="list-style:none">
            <li>
              <label>Player X: </label>
              <a id="Player_X" href="#">0</a>
            </li>
            <li>
              <label>Player O: </label>
            <a id="Player_O" href="#">0</a>
            </li>
            <li>
             <label>Tie Games: </label>
            <a id="Tie_games" href="#">0</a>
            </li>
            </ul>
            <h5 class="font-16">Old games</h5>
            <ul style="list-style:none" id="list-of-oldgames">

            </ul>
      </div>

    </div>
  `)

  $("#createGame").on('click', () => {
    $('#Games').remove();
    $('#theGame').remove();
    $("#RenderGame").append( /*html*/ `
    <div id="theGame" class="theGame" style="margin: 0px 10px 0 10px">
    <div class="col-md-3 shadow top-100" style="width:500px" id="aydio">
        <h4 id="turn"></h4>
         <br />
        <table id="tictactoe" class="tictactoe">
        </table>
    </div>
    </div>
        `);
    $("#RenderGame").append( /*html*/ `
     <div class="col-md-3 shadow top-100 " id="Games" style="margin: 100px 10px 0 10px">
      <div>
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
