import Book from '../Book/Book';

class Library {
  constructor(books = []) {
    this.books = [...books];
  }

  // add individual book
  add(book) {
    this.books = [...this.books, book];
  }
  // remove individual book
  remove(bookToRemove) {
    this.books = this.books.filter(book => book.id !== bookToRemove);
  }
}

export default Library;
