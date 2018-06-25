import gameStorage from '../storeGame.js';
import config from "../store.js";
import modalAlert from "../UIBehavior/modalAlert.js";
import apiUrl from "../config.js";



let updateGame = (board) => {
  let ay = {
    "game": {
      "cell": '',
      "over": false
    }
  }
  console.log(board);
  let normalBoard = [];
  let cells = '';
  for (let column = 0; column < board.length; column++) {
    for (let row = 0; row < board.length; row++) {
      normalBoard.push(board[column][row]);
    }
  }
  for (let index = 0; index < normalBoard.length; index++) {
    cells += `{index:${index},value:${normalBoard[index]==''? " ":normalBoard[index]}},`
  }
  ay.game.cell = {
    cells
  };
  console.log(JSON.stringify(ay.game.cell));
  //   console.log(gameStorage);

  $.ajax({
      url: apiUrl.apiUrl + `/games/${gameStorage.game}`,
      method: "PATCH",
      headers: {
        Authorization: "Token token=" + config.user.token
      },
      data: ay
    })
    .then(data => {
      console.log(`${JSON.stringify(data)}`);
      modalAlert(`Game Saved successfuly`, "Success");
    })
    .catch(() => {
      console.log("Game couldn't be saved!");
    });
}

export default updateGame;
