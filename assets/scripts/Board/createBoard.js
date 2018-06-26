//Creating the table
let createBoard = (tdEvents) => {
  let count = -1;
  let tr, td;
  let table = document.getElementById("tictactoe");
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  for (let trIndex = 1; trIndex <= 3; ++trIndex) {
    tr = document.createElement("tr");
    tr.id = trIndex;
    for (let tdIndex = 1; tdIndex <= 3; ++tdIndex) {
      count++;
      td = document.createElement("td");
      td.id = `${count}`;
      td.className = `${trIndex}-td-${tdIndex}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  count = -1;
  //Add click event to each TD, right after the table is created.
  tdEvents();
}
// };

export default createBoard;
