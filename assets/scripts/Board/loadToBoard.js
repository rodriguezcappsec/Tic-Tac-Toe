import loadedGame from "../storeLoadedGame.js";

let loadToBoard = () => {
  let tds = $("#tictactoe td")
  for (let td = 0; td < tds.length; ++td) {
    tds[td].innerText = loadedGame.cells[td] === "" ? " " : loadedGame.cells[td];
  }
}

export default loadToBoard;
