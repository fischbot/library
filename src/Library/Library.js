import Book from '../Book/Book';
import books from '../assets/sample_data';

class Library {
  constructor() {
    this.books = [...books];
  }

  // display book

  // add book from API/Custom
  add(book) {
    this.books = [...this.books, book];
  }
  // remove individual book
  remove(bookToRemove) {
    this.books = this.books.filter(book => book.id !== bookToRemove.id);
  }

  // sort library
}

export default Library;
