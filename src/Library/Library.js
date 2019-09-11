import Book from '../Book/Book';

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

  createBooksFromObjects(books) {
    return books.map(
      b =>
        new Book(
          b.title,
          b.authors,
          b.publishedDate,
          b.description,
          b.imgUrl,
          b.pages,
          b.hasRead
        )
    );
  }
}

export default Library;
