const bookTile = ({
  img,
  course_code,
  title,
  count,
}) => ` <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
<a class="block relative h-48 rounded overflow-hidden">
  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${img}">
</a>
<div class="mt-4">
  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${course_code}</h3>
  <h2 class="text-gray-900 title-font text-lg font-medium">${title}</h2>
  <p class="mt-1">Count:${count}</p>
</div>
</div>`;

const books = [
  {
    img: "test",
  },
];

const bookList = document.querySelector("#book-list");

bookList.innerHTML = `<img src="img/loading.gif">`;

function loadBooks(callBack) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "data/books.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      bookList.innerHTML = "";
      callBack(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

//  loadBooks((data)=>{

//  data.data.forEach((element) => {
//      bookList.innerHTML += bookTile(element);
//  });
//  })
