import apiUrl from "../config.js";
import config from "../store.js";
import oldGamesModal from "../UIBehavior/oldGamesModal.js";
let showOldGames = () => {
  $('#list-of-oldgames li a').on('click', (event) => {
    $.ajax({
        url: apiUrl.apiUrl + `/games/${event.target.id}`,
        method: "GET",
        headers: {
          Authorization: "Token token=" + config.user.token
        }
      })
      .then(data => {
        oldGamesModal(data.game.cells);
      })
      .catch(() => {
        modalAlert("Game couldn't be loaded!");
      });
  })
}

export default showOldGames;
