const lg = console.log;
const lt = console.table;

const myLibrary = [];

function Book(title, author, pages, ReadStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ReadStatus = ReadStatus;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, ReadStatus) {
  const id = self.crypto.randomUUID();
  const newBook = new Book(title, author, pages, ReadStatus, id);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");
addBookToLibrary(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  309,
  "Unread",
);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Read");
addBookToLibrary("1984", "George Orwell", 328, "Read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "Unread");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "Read");
addBookToLibrary("Dune", "Frank Herbert", 412, "Unread");

// lt(myLibrary);

function displayBooks(library) {
  for (const book of library) {
    const booksContainer = document.querySelector(".books-container");

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card", "grid");

    displayBookTitle(book, bookCard);
    displayBookAuthor(book, bookCard);
    displayBookPages(book, bookCard);
    displayReadStatus(book, bookCard);

    booksContainer.appendChild(bookCard);
  }
}

function displayBookTitle(book, bookCard) {
  const bookTitle = document.createElement("h2");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = book["title"];

  bookCard.appendChild(bookTitle);
}

function displayBookAuthor(book, bookCard) {
  const bookAuthorLabel = document.createElement("div");
  bookAuthorLabel.classList.add("author", "label");
  bookAuthorLabel.textContent = "Author:";

  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("author");
  bookAuthor.textContent = book["author"];

  bookCard.appendChild(bookAuthorLabel);
  bookCard.appendChild(bookAuthor);
}

function displayBookPages(book, bookCard) {
  const bookPagesLabel = document.createElement("div");
  bookPagesLabel.classList.add("pages", "label");
  bookPagesLabel.textContent = "Pages:";

  const bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  bookPages.textContent = book["pages"];

  bookCard.appendChild(bookPagesLabel);
  bookCard.appendChild(bookPages);
}

function displayReadStatus(book, bookCard) {
  const bookReadStatusLabel = document.createElement("div");
  bookReadStatusLabel.classList.add("Read-status", "label");
  bookReadStatusLabel.textContent = "Status:";

  const bookReadStatus = document.createElement("div");
  bookReadStatus.classList.add("Read-status");
  bookReadStatus.textContent = book["ReadStatus"];

  bookCard.appendChild(bookReadStatusLabel);
  bookCard.appendChild(bookReadStatus);
}

displayBooks(myLibrary);

const dialog = document.querySelector("#add-new-book-modal");

const addNewBookBtn = document.querySelector(".add-new-book-btn");

const closeBtn = document.querySelector(".close-add-new-book-btn");

const bookForm = document.querySelector("#add-new-book-form");

addNewBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", (event) => {
  // event.preventDefault();
  dialog.requestClose();
});

bookForm.addEventListener("submit", () => {
  const inputs = document.getElementById("add-new-book-form").elements;
  const bookTitle = inputs["book-title"];
  const bookAuthor = inputs["book-author"];
  const bookPages = inputs["book-pages"];
  const bookStatus = inputs["book-status"];
  addBookToLibrary(
    bookTitle.value,
    bookAuthor.value,
    parseInt(bookPages.value),
    bookStatus.value,
  );
  displayBooks(myLibrary);
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookStatus.value = "Unread";
  // lg(bookTitle.value);
  // lg(bookAuthor.value);
  // lg(bookPages.value);
  // lg(bookStatus.value);
});

//
//
//
//

// lg(myLibrary[0]["title"]);

// const bookTitle = document.createElement("h2");
// bookTitle.textContent = myLibrary[0]["title"];

// const bookCard = document.createElement("div");
// bookCard.classList.add("book-card", "grid");

// const bookContainer = document.querySelector(".book-container");

// bookCard.appendChild(bookTitle);
// bookContainer.appendChild(bookCard);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// STYLING STUFF
const hoverLetters = document.querySelector(".hover-letters");
const hoverText = hoverLetters.textContent;
hoverLetters.textContent = "";

for (let letter of hoverText) {
  const span = document.createElement("span");
  span.classList = "hover-letter";
  span.textContent = letter;
  hoverLetters.appendChild(span);
}
