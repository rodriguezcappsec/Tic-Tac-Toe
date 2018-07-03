let oldGamesModal = (cells) => {
  let tds = $("#oldGamesTable td")
  for (let td = 0; td < tds.length; ++td) {
    tds[td].innerText = cells[td];
  }
}

export default oldGamesModal;
