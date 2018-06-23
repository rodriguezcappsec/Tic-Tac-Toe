//Parsing the board into a multidimensional array
let boardToArray = boardStorage => {
  let tds = $("#tictactoe td");
  let count = 0;
  var tempTds = "";
  for (let td = 0; td < tds.length; ++td) {
    //Ternary conditions, making sure that the array will be able to have empty values(non-clicked cells in the board)
    tds[td].innerHTML == "" ? (tempTds += " ") : (tempTds += tds[td].innerHTML);
    ++count; //Counting to check everytime the loop increments to the given dimension

    count.toString() === $("#dimension").val() //Ternary condition, if the counter is equal the dimension
      ? (boardStorage.push(tempTds.split("")), (tempTds = ""), (count = 0))
      : count;
  }
  console.log(boardStorage);
};

export default boardToArray;
