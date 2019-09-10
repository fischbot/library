class Library {
  constructor(books = []) {
    this.books = [...books];
  }

  add(book) {
    this.books = [...this.books, book];
  }

  remove(bookToRemove) {
    this.books = this.books.filter(book => book.id !== bookToRemove);
  }

  update(books) {
    this.books = [...books];
  }
}

export default Library;
