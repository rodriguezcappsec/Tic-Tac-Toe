let winner = (arr, boolSwitcher) => {
  var hztlWinner = true;
  let dgnlWinner = true;
  let secondDgnlWinner = true;
  let vtclWinner = true;
  //Horizontal Checking
  for (var index = 0; index < arr.length; index++) {
    hztlWinner = arr[index].every(
      v => v == arr[index][0] && arr[index][0] != " "
    );
    hztlWinner
      ? (alert(`The winner is : ${arr[index][0]} | Row ${index + 1}`),
        (boolSwitcher = false),
        setTimeout(() => {
          document
            .querySelectorAll("#tictactoe td")
            .forEach(e => (e.innerHTML = ""));
        }, 1000))
      : "";
  }
  //Vertical Checking
  if (hztlWinner === false) {
    let vtclChecker = [];
    for (let y = 0; y < arr.length; y++) {
      for (let x = 0; x < arr.length; x++) {
        vtclChecker.push(arr[x][y]);
        vtclChecker.length === arr.length
          ? ((vtclWinner = vtclChecker.every(
              v => v == vtclChecker[0] && vtclChecker[0] !== " "
            )),
            vtclWinner
              ? (alert(`The winner is : ${vtclChecker[0]} | Column ${y + 1}`),
                (boolSwitcher = false),
                setTimeout(() => {
                  document
                    .querySelectorAll("#tictactoe td")
                    .forEach(e => (e.innerHTML = ""));
                }, 1000))
              : "")
          : "";
      }
      vtclChecker = [];
    }
  }
  //Diagonal Checking
  if (vtclWinner === false) {
    let dgnlChecker = [];
    for (let index = 0; index < arr.length; index++) {
      dgnlChecker.push(arr[index][index]);
      dgnlChecker.length === arr.length
        ? ((dgnlWinner = dgnlChecker.every(
            v => v == dgnlChecker[0] && dgnlChecker[0] !== " "
          )),
          dgnlWinner
            ? (alert(`The winner is : ${dgnlChecker[0]} | Diagonal ${1}`),
              (boolSwitcher = false),
              setTimeout(() => {
                document
                  .querySelectorAll("#tictactoe td")
                  .forEach(e => (e.innerHTML = ""));
              }, 1000))
            : "")
        : "";
    }
  }
  //Second diagonal Checking
  if (dgnlWinner === false) {
    let secondDgnlChecker = [];
    let y = arr.length - 1;
    for (let x = 0; x < arr.length; ++x) {
      secondDgnlChecker.push(arr[x][y]);
      --y;
      secondDgnlChecker.length === arr.length
        ? ((y = arr.length - 1),
          (secondDgnlWinner = secondDgnlChecker.every(
            v => v == secondDgnlChecker[0] && secondDgnlChecker[0] !== " "
          )),
          secondDgnlWinner
            ? (alert(`The winner is : ${secondDgnlChecker[0]} | Diagonal ${2}`),
              (boolSwitcher = false),
              setTimeout(() => {
                document
                  .querySelectorAll("#tictactoe td")
                  .forEach(e => (e.innerHTML = ""));
              }, 1000))
            : "")
        : "";
    }
  }
};

export default winner;
