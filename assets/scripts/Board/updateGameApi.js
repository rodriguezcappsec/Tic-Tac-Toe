import gameStorage from '../storeGame.js';
import config from "../store.js";
import modalAlert from "../UIBehavior/modalAlert.js";
import apiUrl from "../config.js";
import selectedId from "../saveToSelectedId.js";

let indexValue = (board, position, winner) => {
  let normalBoard = [];
  let updateGame;
  for (let column = 0; column < board.length; column++) {
    for (let row = 0; row < board.length; row++) {
      normalBoard.push(board[column][row]);
    }
  }
  return (updateGame = {
    index: position,
    value: normalBoard[position],
    winner: winner
  });
}

let updateGame = (board, position, win) => {
  console.log(indexValue(board, position))
  $.ajax({
      url: apiUrl.apiUrl + `/games/${selectedId.gameId}`,
      method: "PATCH",
      headers: {
        Authorization: "Token token=" + config.user.token
      },
      data: {
        "game": {
          "cell": {
            index: indexValue(board, position, win).index,
            value: indexValue(board, position, win).value
          },
          "over": indexValue(board, position, win).winner
        }
      }
    })
    .then(data => {
      console.log(`${JSON.stringify(data)}`);
    })
    .catch(() => {
      console.log("Game couldn't be saved!");
    });
}

export default updateGame;
