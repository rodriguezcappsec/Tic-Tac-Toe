import modalAlert from "../UIBehavior/modalAlert.js";
//Creating the table
let createBoard = (dimension, tdEvents) => {
  if (dimension > 7) {
    modalAlert(`Board limit size is 7`,"Warning!!");
  } else if (dimension < 3 || dimension < 1) {
    modalAlert("Dimension has to be greater then 3 and not less the 0", "Warning!!");
  } else if (/[A - Za - z]/g.exec(dimension)) {
    modalAlert("Only numerical values are accepted!", "Warning!!");
  } else {
    let tr, td;
    let table = document.getElementById("tictactoe");
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    for (let trIndex = 1; trIndex <= dimension; ++trIndex) {
      tr = document.createElement("tr");
      tr.id = trIndex;
      for (let tdIndex = 1; tdIndex <= dimension; ++tdIndex) {
        td = document.createElement("td");
        td.id = `${trIndex}-${tdIndex}`;
        td.className = `${trIndex}-td-${tdIndex}`;
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
    //Add click event to each TD, right after the table is created.
    tdEvents();
  }
};

export default createBoard;
