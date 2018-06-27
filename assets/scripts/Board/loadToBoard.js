import loadedGame from "../storeLoadedGame.js";
import selectedGameId from "../saveToSelectedId.js";

let loadToBoard = () => {
  let tds = $("#tictactoe td")
  console.log(loadedGame.cells);
  for (let td = 0; td < tds.length; ++td) {
    tds[td].innerText = loadedGame.cells[td] === "" ? " " : loadedGame.cells[td];
  }
  console.log(loadedGame);
}

export default loadToBoard;
