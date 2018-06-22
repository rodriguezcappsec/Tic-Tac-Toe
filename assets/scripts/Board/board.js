"use strict";
import winner from "./winner.js";
import boardToArray from "./boardToArray.js";
import createBoard from "./createBoard.js";
import logIn from "../Auth/log-in.js";
import token from "../Auth/token.js";

let ticTacToe = () => {
  //Array where board will be store to determine the winner
  var boardStorage = [];
  //Variable to switch everytime the user clicks (O= True, X=False)
  let boolSwitcher = false;
  //Creating the table

  //Click event to each cell in the table
  let listenerToEachTd = () => {
    document.querySelectorAll("#tictactoe td").forEach(e =>
      e.addEventListener("click", function() {
        this.innerText === ""
          ? //Boolean Switcher, TD text (O= True, X=False)
            ((boolSwitcher = !boolSwitcher),
            boolSwitcher === true
              ? (this.innerText = "O")
              : (this.innerText = "X"),
            //Every time the user clicks, the board parses into a multidimensional array
            boardToArray(boardStorage),
            //Alerting the winner
            winner(boardStorage, boolSwitcher))
          : "";
        //Clearing the board after user clicks, and the winner is determined
        boardStorage = [];
      })
    );
  };

  //Showing the board based on the user input
  let showBoard = () => {
    document.getElementById("showBoard").addEventListener("click", function() {
      let dimension = document.getElementById("dimension").value;
      createBoard(Number(dimension), listenerToEachTd);
    });
  };
  // if (token.user.token) {
    showBoard();
  // }
};
export default ticTacToe;
