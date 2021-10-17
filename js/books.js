const bookList = document.querySelector("#book-list");
const searchTerm = document.querySelector("#search-term");

let books = [];

searchTerm.addEventListener("change", (e) => {
  searchBook(e.target.value.toLowerCase());
});

bookList.innerHTML = "loading..";

const renderBooks = (data) => {
  bookList.innerHTML = "";
  data.forEach((book) => {
    bookList.innerHTML += bookTile(book);
  });
};

loadData("books", (data) => {
  books = data.data;
  renderBooks(books);
});

const searchBook = (term) => {
  let newBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(term) ||
      book.course_code.toLowerCase().includes(term)
  );
  renderBooks(newBooks);
};
