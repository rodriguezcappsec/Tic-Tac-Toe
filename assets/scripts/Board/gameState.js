import token from "../store.js";
import apiUrl from "../config.js";

let createGame = (board, clickCounts) => {
  let isOver = $("#dimension").val() * $("#dimension").val();
  console.log(isOver);

  $.ajax({
    url: apiUrl.apiUrl + "/games",
    method: "POST",
    data: {
      games: [
        {
          cells: board,
          over: clickCounts == isOver ? true : false,
          player_x: {
            id: token.user.id,
            email: token.user.email
          },
          player_o: null
        }
      ]
    }
  })
    .then(data => {
      console.log(`Game Saved! ${data.games[0].id}`);
    })
    .catch(() => {
      console.log("Game couldn't be saved!");
    });
};
export default createGame;
