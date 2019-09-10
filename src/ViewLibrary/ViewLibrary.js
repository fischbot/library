import View from '../View/View';
import ViewBook from '../ViewBook/ViewBook';

class ViewLibrary extends View {
  constructor(containerId) {
    super(containerId);
    this.msg = 'Your library is empty!';
  }

  updateView(books) {
    this.clearView(this.containerId);
    this.render(books);
  }

  render(books, isSearchResult) {
    if (books.length === 0) {
      this.emptyMsg(this.msg);
    } else {
      books.map(book => {
        const view = new ViewBook(isSearchResult);
        const b = view.createBookView(book);
        this.containerId.appendChild(b);
      });
    }
  }
}

export default ViewLibrary;
