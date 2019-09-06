import View from '../View/View';
import ViewBook from '../ViewBook/ViewBook';

class ViewLibrary extends View {
  constructor(parentId) {
    super(parentId);
  }

  updateView(books) {
    this.clearView(this.parent);
    this.render(books);
  }

  emptyMsg(content) {
    const emptyMsg = this.createViewElement(
      'p',
      [],
      'empty-library-msg',
      content
    );
    this.parent.appendChild(emptyMsg);
  }

  render(books) {
    if (books.length === 0) this.emptyMsg('Your library is empty!');
    books.map(book => {
      const view = new ViewBook(false);
      const b = view.createBookView(book);
      this.parent.appendChild(b);
    });
  }
}

export default ViewLibrary;
