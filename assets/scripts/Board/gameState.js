import config from "../store.js";
import apiUrl from "../config.js";

let createGame = (board, gameOver) => {
  console.log(board);
  console.log(gameOver);
  $.ajax({
      url: apiUrl.apiUrl + "/games",
      method: "POST",
      headers: {
        Authorization: "Token token=" + config.user.token
      },
      data: {
        game: {
          cells: board,
          over: gameOver,
          player_x: {
            id: config.user.id,
            email: config.user.email
          },
          player_o: null
        }
      }
    })
    .then(data => {
      console.log(`Game Saved! ${JSON.stringify(data.game.cells)}`);
    })
    .catch(() => {
      console.log("Game couldn't be saved!");
    });
};
 
export default createGame;
