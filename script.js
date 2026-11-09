const lg = console.log;
const lt = console.table;

const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus) {
  const id = self.crypto.randomUUID();
  const newBook = new Book(title, author, pages, readStatus, id);
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
    bookCard.setAttribute("data-id", book["id"]);

    displayBookTitle(book, bookCard);
    displayRemoveBtn(bookCard);
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

function displayRemoveBtn(bookCard) {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-book-btn");

  removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
              />
            </svg>`;
  bookCard.appendChild(removeBtn);
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
  bookReadStatus.classList.add("read-status");
  bookReadStatus.textContent = book["readStatus"];

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

bookForm.addEventListener("submit", (event) => {
  // event.preventDefault();
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

const removeBookBtn = document.querySelectorAll(".remove-book-btn");

const booksContainer = document.querySelector(".books-container");

booksContainer.addEventListener("click", (event) => {
  if (event.target.closest(".remove-book-btn")) {
    const idToBeRemoved = event.target.closest(".book-card").dataset.id;

    for (let i = 0; i < myLibrary.length; i++) {
      // lg(myLibrary[i]["id"]);

      if (myLibrary[i]["id"] === idToBeRemoved) {
        // lg(myLibrary[i]["title"]);
        const bookIndexToBeRemoved = i;
        // lg(`library before:`);
        // lt(myLibrary);
        // lg(`bookToBeRemoved: ${myLibrary[i]["title"]}`);
        myLibrary.splice(bookIndexToBeRemoved, 1);
        // lg(`library after:`);
        // lt(myLibrary);
        // lg(myLibrary.length);
        updateDisplayBook(myLibrary);
      }
    }
  }
});

function updateDisplayBook(myLibrary) {
  while (booksContainer.firstChild) {
    booksContainer.removeChild(booksContainer.firstChild);
  }

  displayBooks(myLibrary);
}

// for (let i = 0; i < myLibrary.length; i++) {
//   // lg(myLibrary[i]["id"]);
//   for (const bookItem in myLibrary[i]) {
//     if (bookItem === "id") {
//       lg(myLibrary[i][bookItem]);
//     }
//   }
// }

// lg(myLibrary[0]["id"]);
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
