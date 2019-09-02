import View from '../View/View';

class ViewLibrary extends View {
  constructor(parentId) {
    super(parentId);
  }

  updateView(books) {
    this.clearView(this.parent);
    this.render(books);
  }

  emptyMsg() {
    const emptyMsg = this.createViewElement(
      'p',
      [],
      'empty-library-msg',
      'Your library is empty!'
    );
    this.parent.appendChild(emptyMsg);
  }

  createBookView(book) {
    const container = this.createViewElement('div', ['book'], book.id);
    const values = [
      this.createViewElement('h2', ['book-title'], '', book.title),
      this.createViewElement('h3', ['book-author'], '', book.author),
      this.createViewElement('img', ['book-img'], '', book.imgUrl),
      this.createViewElement(
        'p',
        ['book-published-date'],
        '',
        `Published: ${book.publishedDate}`
      ),
      this.createViewElement(
        'p',
        ['book-page-count'],
        '',
        `${book.pages} pages`
      ),
      this.createViewElement('p', ['book-description'], '', book.description),
      this.createViewElement(
        'button',
        ['book-has-read-btn', book.hasRead && 'read'],
        '',
        book.hasRead ? 'Read' : 'Not Read'
      ),
      this.createViewElement('button', ['book-delete-btn'], '', 'X')
    ];
    values.map(value => container.appendChild(value));
    return container;
  }

  render(books) {
    if (books.length === 0) this.emptyMsg(this.parent);
    books.map(book => {
      const b = this.createBookView(book);
      this.parent.appendChild(b);
    });
  }
}

export default ViewLibrary;
