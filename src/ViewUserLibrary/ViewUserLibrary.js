import ViewLibrary from '../ViewLibrary/ViewLibrary';
import sort from '../utils/sort';

class ViewUserLibrary extends ViewLibrary {
  constructor(parentId) {
    super(parentId);
  }
  updateReadView(target) {
    const isRead = target.classList.contains('read');
    target.innerText = isRead ? 'Not Read' : 'Read';
    isRead ? target.classList.remove('read') : target.classList.add('read');
  }

  handleReadStatus(target, books, updateReadView) {
    for (let book of books) {
      if (book.id === target.parentNode.id) {
        book.hasRead = book.toggleReadStatus(book);
        this.updateReadView(target);
        break;
      }
    }
  }

  handleClick(target, books) {
    this.handleReadStatus(target, books);
  }

  sort(id, books) {
    // ex: id = 'sort-by-authors', sortType = 'authors'
    const type = id.slice(id.lastIndexOf('-') + 1);
    if (type === 'title' || type === 'authors')
      books = sort.strings(type, books);

    if (type === 'pages') books = sort.byPages(type, books);

    this.updateView(books);
  }
}

export default ViewUserLibrary;
