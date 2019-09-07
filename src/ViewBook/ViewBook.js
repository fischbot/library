import View from '../View/View';
import './ViewBook.styles.css';

class ViewBook extends View {
  constructor(isSearchResult) {
    super();

    this.isSearchResult = isSearchResult;
  }

  createBookView(book) {
    const container = this.createViewElement('div', ['book'], book.id);
    let values = [
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
      this.createViewElement('p', ['book-description'], '', book.description)
    ];

    /// add 'close' and 'read/not read' buttons for books in user's library only
    if (!this.isSearchResult) {
      values = [
        ...values,
        this.createViewElement(
          'button',
          ['book-has-read-btn', book.hasRead && 'read'],
          '',
          book.hasRead ? 'Read' : 'Not Read'
        ),
        this.createViewElement('button', ['book-delete-btn'], '', 'X')
      ];
    } else {
      values = [
        ...values,
        this.createViewElement(
          'button',
          ['add-to-library-btn'],
          book.id,
          'Add to Library'
        )
      ];
    }

    values.map(value => container.appendChild(value));
    return container;
  }

  render() {}
}

export default ViewBook;
