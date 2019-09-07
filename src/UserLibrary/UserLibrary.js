import Library from '../Library/Library';
import ViewUserLibrary from '../ViewUserLibrary/ViewUserLibrary';
import sort from '../utils/sort';

class UserLibrary extends Library {
  constructor(books) {
    super(books);
    this.view = new ViewUserLibrary('js-book-list');
    this.view.render(this.books);
  }

  createSortId() {}

  updateReadView(target) {
    const isRead = target.classList.contains('read');
    target.innerText = isRead ? 'Not Read' : 'Read';
    isRead ? target.classList.remove('read') : target.classList.add('read');
  }

  handleReadStatus(target, books) {
    for (let book of books) {
      if (book.id === target.parentNode.id) {
        book.hasRead = book.toggleReadStatus(book);
        this.updateReadView(target);
        break;
      }
    }
  }

  handleSort(id) {
    this.sort(id, this.books);
    this.view.updateView(this.books);
  }

  handleRemove(id) {
    this.remove(id);
    this.view.updateView(this.books);
  }

  handleAddBookFromSearch(books, bookId) {
    const book = this.findBook(books, bookId);
    this.add(book[0]);
    // debugger;
    this.view.updateView(this.books);
  }

  addBookFromCustom(book) {
    this.add(book);
    this.view.updateView(this.books);
  }

  findBook(books, idToFind) {
    return books.filter(book => book.id === idToFind);
  }

  sort(id, books) {
    // ex: id = 'sort-by-authors', sortType = 'authors'
    const type = id.slice(id.lastIndexOf('-') + 1);
    if (type === 'title' || type === 'authors')
      books = sort.strings(type, books);

    if (type === 'pages') books = sort.byPages(type, books);

    this.update(books);
  }
}

export default UserLibrary;
