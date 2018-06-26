import apiUrl from "../config.js";
import gameStorage from '../storeGame.js';
import modalAlert from "../UIBehavior/modalAlert.js";
import config from "../store.js";
import loadedGame from "../storeLoadedGame.js";
// ${gameStorage.game}
let gameArray = undefined;
let loadGame = () => {
  $.ajax({
      url: apiUrl.apiUrl + `/games/${gameStorage.game}`,
      method: "GET",
      headers: {
        Authorization: "Token token=" + config.user.token
      }
    })
    .then(data => {
      loadedGame.cells = data.game.cells;
      console.log(data.game.id);

    })
    .catch(() => {
      console.log("Game couldn't be loaded!");
    });
}
export default {
  loadGame,
  gameArray
};
