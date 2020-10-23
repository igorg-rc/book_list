import StoreCtrl from './StoreCtrl';
import BookView from '../views/BookView';

// UICtrl class: handle UI tasks
class UICtrl {
  static displayBooks() {

    const books = Ctrl.getBooks();

    books.forEach((book) => UICtrl.addBookToList(book));
  }

  static addBookToList(book) {
    BookView.showBook();
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    // Vanish 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}
