import config from "../store.js";
import apiUrl from "../config.js";
let getGame = () => {
  $('#getGame').on('click', () => {
    $.ajax({
        url: apiUrl.apiUrl + `/games/5876`,
        method: "GET",
        headers: {
          Authorization: "Token token=" + config.user.token
        }
      })
      .then(data => {
        //   console.log(`Game Saved! ${JSON.stringify(data.game)}`);
        console.log(data);
      }).catch(() => {
        console.log("Game couldn't be saved!");
      })
  });
}
export default getGame;
