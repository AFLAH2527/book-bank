const bookList = document.querySelector("#book-list");
const searchTerm = document.querySelector("#search-term");

let books = [];

searchTerm.addEventListener("input", (e) => {
  searchBook(e.target.value.toLowerCase());
});

bookList.innerHTML = `<img src="img/loading.gif">`;

const renderBooks = (data) => {
  bookList.innerHTML = "";
  data.forEach((book) => {
    bookList.innerHTML += bookTile(book);
  });
};

loadData("books", (loaded_books) => {
  books = loaded_books;
  renderBooks(books);
});

// fetchBooks();
const searchBook = (term) => {
  let newBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(term) ||
      book.course_code.toLowerCase().includes(term)
  );
  renderBooks(newBooks);
};
