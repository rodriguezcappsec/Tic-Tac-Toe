import config from "../store.js";
import modalAlert from "../UIBehavior/modalAlert.js";
import apiUrl from "../config.js";
import selectedId from "../saveToSelectedId.js";
import storedGames from "../listOfGames.js";
import oldGames from "../oldGamesStorage.js"
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
let renderOldGames = (winner, games) => {
  if (winner) {
    for (let index = 0; index < games.length; index++) {
      if ($(`#${games[index]}`).attr('id') != games[index]) {
        $('#list-of-oldgames').append("<li>" +
          `<a class="clickToShow" id="${games[index]}" href="#">Game ${index + 1}</a>` + "</li>")
      }
    }
  }
}
let over = (isWinner) => {
  if (isWinner) {
    oldGames.olds.push(selectedId.gameId);
    let index = storedGames.gameIds.indexOf(selectedId.gameId);
    if (index > -1) {
      storedGames.gameIds.splice(index, 1);
    }
    $(`#${selectedId.gameId}`).remove();
  }
}


let updateGame = (board, position, win) => {
  over(win);
  renderOldGames(win, oldGames.olds);
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
    .then((data) => {
      console.log(oldGames.olds)
    })
    .catch(() => {
      modalAlert("Game couldn't be saved!");
    });
}

export default updateGame;
