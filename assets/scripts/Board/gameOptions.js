import getGame from "./getGame.js";
import createGame from "./createGame.js";
let gameOptions = () => {
  $('#RenderGame').append(`
  <div class="col-md-3 top-100 left-50-percent" id="gameOptions">
      <div class="shadow">
          <h5 class="font-16">Game options</h5>
          <ul style="list-style:none">
            <li>
              <a id="createGame" href="#">Create Game</a>
            </li>
            <li>
              <a id="loadGame" href="#">Load Game</a>
            </li>
            <li>
              <a id="saveGame" href="#">saveGame</a>
            </li>
            </ul>
      </div>
    </div>
  `)
  $("#createGame").on('click', () => {
    createGame();
  })
  $('#loadingGame').on('click', () => {
    loadGame();
  })
}

export default gameOptions;
