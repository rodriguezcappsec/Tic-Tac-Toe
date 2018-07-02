import config from "../store.js";
import apiUrl from "../config.js";
import modalAlert from "../UIBehavior/modalAlert.js";
import gameStorage from "../storeGame.js";
import listOfGames from "../listOfGames.js";
import savedGames from "../Board/savedGames.js";
import gameFeatures from "../Board/gameFeatures.js";
let createGame = () => {
  $.ajax({
      url: apiUrl.apiUrl + "/games",
      method: "POST",
      headers: {
        Authorization: "Token token=" + config.user.token
      },
      data: {
        game: {
          cells: [],
          over: false,
          player_x: {
            id: config.user.id,
            email: config.user.email
          },
          player_o: null
        }
      }
    })
    .then(data => {
      gameStorage.game = data.game.id;
      listOfGames.gameIds.push(data.game.id)
    })
    .catch(() => {
      modalAlert("Game couldn't be saved!");
    });
};

export default createGame;
