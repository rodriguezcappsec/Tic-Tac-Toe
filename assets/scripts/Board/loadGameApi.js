import apiUrl from "../config.js";
import config from "../store.js";
import loadedGame from "../storeLoadedGame.js";
import selectedId from "../saveToSelectedId.js"
import loadToBoard from "./loadToBoard.js";
import modalAlert from "../UIBehavior/modalAlert.js";

let loadGame = () => {
  $('#list-of-games li a').on('click', (event) => {
    $.ajax({
        url: apiUrl.apiUrl + `/games/${event.target.id}`,
        method: "GET",
        headers: {
          Authorization: "Token token=" + config.user.token
        }
      })
      .then(data => {
        loadedGame.cells = data.game.cells;
        selectedId.gameId = data.game.id;
        loadToBoard();
      })
      .catch(() => {
        modalAlert("Game couldn't be loaded!");
      });
  })
}
export default  loadGame
