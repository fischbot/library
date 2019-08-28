import Book from '../Book/Book';
import sampleData from '../assets/sample_data';

class Library {
  constructor() {
    this.books = [...sampleData];
    let book = new Book('Test book', ['me', 'myself'], '2019');
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
