import config from "../store.js";
import apiUrl from "../config.js";
import gameStored from "../storeGame.js";
let getGame = () => {
  $('#saveGame').on('click', () => {
    $.ajax({
        url: apiUrl.apiUrl + `/games/5876`,
        method: "GET",
        headers: {
          Authorization: "Token token=" + config.user.token
        }
      })
      .then(data => {

        console.log(data);
      }).catch(() => {
        console.log("Game couldn't be saved!");
      })
  });
}
export default getGame;
