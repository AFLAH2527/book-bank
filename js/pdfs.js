const pdfTable = document.querySelector("#pdf-table");

pdfTable.innerHTML = `<img src="img/loading.gif">`;

loadDataOld("pdfs", (data) => {
  pdfTable.innerHTML = "";
  data.data.forEach((element) => {
    pdfTable.innerHTML += pdfTile(element);
  });
});
