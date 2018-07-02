"use strict";
import boardToArray from "./boardToArray.js";
import createBoard from "./createBoard.js";
import modalAlert from "../UIBehavior/modalAlert.js";
import saveGame from "./updateGameApi";
import oldGames from "../oldGamesStorage.js";

var boardStorage = []; //Array where board will be store to determine the winner
let boolSwitcher = false; //Variable to switch everytime the user clicks (O= True, X=False)
let gameOver = false;
let clickCounter = 0; //Counter to determine if it is a raw game
let playerX = "X"
let playerO = "O";

let ticTacToe = () => {
  let listenerToEachTd = () => {
    $("#tictactoe td").on("click", event => {
      if (gameOver != true) {
        if (event.target.innerText === "") {
          //Boolean Switcher, TD text (O= True, X=False)
          boolSwitcher = !boolSwitcher;
          boolSwitcher === true ?
            ($('#turn').text("Player X turn"), event.target.innerText = playerX) :
            ($('#turn').text("Player O turn"), event.target.innerText = playerO),
            clickCounter++;
          boardToArray(boardStorage); //Every time the user clicks, the board parses into a multidimensional array
          winner(boardStorage);
          saveGame(boardStorage, event.target.id, gameOver);
        }
      }
      boardStorage = []; //Clearing the board after user clicks, and the winner is determined
      //  gameOver = false;
    });
  };
  //Showing the board based on the user input
  let showBoard = () => {
    $(".clickToStart").on("click", () => {
      clickCounter = 0;
      boolSwitcher = false;
      createBoard(listenerToEachTd);
      gameOver = false;
    });
  };
  showBoard();
};

let winner = arr => {
  var hztlWinner = true;
  let dgnlWinner = true;
  let secondDgnlWinner = true;
  let vtclWinner = true;
  let dimension = 3;
  //Horizontal Checking
  for (var index = 0; index < arr.length; index++) {
    hztlWinner = arr[index].every(
      v => v == arr[index][0] && arr[index][0] != " "
    );
    if (hztlWinner) {
      clickCounter = 0;
      boolSwitcher = false;
      gameOver = true;
      modalAlert(`The winner is : Player ${arr[index][0]} --> Row ${index + 1}`, "Congratulations!!", "true");
      $(`#Player_${arr[index][0]}`).text(Number($(`#Player_${arr[index][0]}`).text()) + 1)
    }
  }
  //Vertical Checking
  if (hztlWinner === false) {
    let vtclChecker = [];
    for (let y = 0; y < arr.length; y++) {
      for (let x = 0; x < arr.length; x++) {
        vtclChecker.push(arr[x][y]);
        if (vtclChecker.length === arr.length) {
          (vtclWinner = vtclChecker.every(
            v => v == vtclChecker[0] && vtclChecker[0] !== " "
          ));
          if (vtclWinner) {
            clickCounter = 0;
            modalAlert(`The winner is : Player ${vtclChecker[0]} --> Column ${y + 1}`, "Congratulations!!", true);
            boolSwitcher = false;
            gameOver = true;
          $(`#Player_${vtclChecker[0]}`).text(Number($(`#Player_${vtclChecker[0]}`).text()) + 1)
          }
        }
      }
      vtclChecker = [];
    }
  }
  //Diagonal Checking
  if (vtclWinner === false) {
    let dgnlChecker = [];
    for (let index = 0; index < arr.length; index++) {
      dgnlChecker.push(arr[index][index]);
      if (dgnlChecker.length === arr.length) {
        dgnlWinner = dgnlChecker.every(v => v == dgnlChecker[0] && dgnlChecker[0] !== " ");
        if (dgnlWinner) {
          clickCounter = 0;
          modalAlert(`The winner is : Player ${dgnlChecker[0]} --> Diagonal ${1}`, "Congratulations!!", true);
          boolSwitcher = false;
          gameOver = true;
          $(`#Player_${dgnlChecker[0]}`).text(Number($(`#Player_${dgnlChecker[0]}`).text()) + 1)
        }
      }
    }
  }
  //Second diagonal Checking
  if (dgnlWinner === false) {
    let secondDgnlChecker = [];
    let y = arr.length - 1;
    for (let x = 0; x < arr.length; ++x) {
      secondDgnlChecker.push(arr[x][y]);
      --y;
      if (secondDgnlChecker.length === arr.length) {
        y = arr.length - 1;
        (secondDgnlWinner = secondDgnlChecker.every(
          v => v == secondDgnlChecker[0] && secondDgnlChecker[0] !== " "
        ));
        if (secondDgnlWinner) {
          clickCounter = 0;
          modalAlert(
            `The winner is : Player ${secondDgnlChecker[0]} --> Diagonal ${2}`,
            "Congratulations!!", true
          );
          boolSwitcher = false;
          gameOver = true;
          $(`#Player_${secondDgnlChecker[0]}`).text(Number($(`#Player_${secondDgnlChecker[0]}`).text()) + 1)
        }
      }
    }
  }
  if (
    clickCounter == dimension * dimension &&
    secondDgnlWinner == false &&
    dgnlWinner == false &&
    vtclWinner == false &&
    dgnlWinner == false
  ) {
    modalAlert("Raw Game", "No winner!");
    clickCounter = 0;
    setTimeout(() => {
      document
        .querySelectorAll("#tictactoe td")
        .forEach(e => (e.innerHTML = ""));
    }, 1000);
    $('#Tie_games').text(Number($('#Tie_games').text()) + 1)
  }
};

export default ticTacToe;
