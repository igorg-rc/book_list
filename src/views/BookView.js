export default class BookView {
  constructor(list, row) {
    this.list = document.querySelector('#book-list');
    this.row = document.createElement('tr');
  }
  static showBook() {
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);

  }
}