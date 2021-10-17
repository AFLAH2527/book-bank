const pdfTable = document.querySelector("#pdf-table");

pdfTable.innerHTML = "loading..";

loadData("pdfs", (data) => {
  pdfTable.innerHTML = "";
  data.data.forEach((element) => {
    pdfTable.innerHTML += pdfTile(element);
  });
});
