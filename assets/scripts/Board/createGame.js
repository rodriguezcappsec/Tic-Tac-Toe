import config from "../store.js";
import apiUrl from "../config.js";
import modalAlert from "../UIBehavior/modalAlert.js";

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
      modalAlert(`Game Saved successfuly ${JSON.stringify(data)}`, "Success");
    })
    .catch(() => {
      console.log("Game couldn't be saved!");
    });
};

export default createGame;
