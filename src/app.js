import Book from './models/Book';
import StoreCtrl from './controllers/StoreCtrl';
import UICtrl from './controllers/UICtrl';


// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent default
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill all fields!', 'danger');
  } else {
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Clear fields
    UI.clearFields();

    // Show add a book alert
    UI.showAlert('Book was added', 'success');
  }
});

// Event: Remove a a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove biik from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show remove a book alert
  UI.showAlert('Book was removed', 'success');
});