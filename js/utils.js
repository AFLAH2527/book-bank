function loadDataOld(path, callBack) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", `data/${path}.json`, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callBack(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

function loadData(path, callBack) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open(
    "GET",
    `https://api.airtable.com/v0/app8BWp7LGDCriEb7/Back-End?api_key=key5FMNTA8DyEb3Xj&view=Book%20Bank`,
    true
  );
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      const data = JSON.parse(xobj.responseText);
      const books = data.records.map((record) => {
        return {
          title: record.fields.Name.split(":")[1],
          course_code: record.fields.Name.split(":")[0],
          count: record.fields["Remaining Books"],
          image:
            record.fields["Book cover image"] &&
            record.fields["Book cover image"][0].thumbnails.full.url,
        };
      });
      callBack(books);
    }
  };
  xobj.send(null);
}

// const fetchBooks = async () => {
//   const response = await fetch(
//     "https://api.airtable.com/v0/app8BWp7LGDCriEb7/Back-End?api_key=key5FMNTA8DyEb3Xj&view=Book%20Bank"
//   );
//   const books = await response.json();
//   bookList.innerHTML = "";
//   books.records.forEach((book) => {
//     console.log(book);
//     bookList.innerHTML += bookTile({
//       course_code: book.fields.Name,
//       title: book.fields.Name,
//       count: book.fields["Remaining Books"],
//     });
//   });
// };
