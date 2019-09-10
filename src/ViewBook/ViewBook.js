import View from '../View/View';
import './ViewBook.styles.scss';

class ViewBook extends View {
  constructor(isSearchResult) {
    super();

    this.isSearchResult = isSearchResult;
  }

  createBookView(book) {
    let bookClasses = ['book'];
    if (book.hasOwnProperty('hasRead') && book.hasRead) {
      bookClasses = [...bookClasses, 'read-border'];
    }
    const container = this.createViewElement('div', bookClasses, book.id);

    const sub = book.title.substring(0, 32);
    const isTruncated = sub.length < book.title.length;
    const title = isTruncated ? sub + '...' : sub;
    let values = [
      this.createViewElement('h2', ['book__title'], '', title),
      this.createViewElement(
        'h3',
        ['book__author'],
        '',
        `by ${book.authors[0]}`
      ),
      this.createViewElement('img', ['book__img'], '', book.imgUrl),
      this.createViewElement(
        'p',
        ['book__published-date'],
        '',
        `Published: ${book.publishedDate}`
      ),
      this.createViewElement(
        'p',
        ['book__page-count'],
        '',
        `${book.pages} pages`
      ),
      this.createViewElement('p', ['book__description'], '', book.description)
    ];

    /// add 'close' and 'read/not read' buttons for books in user's library only
    if (!this.isSearchResult) {
      let btnClasses = ['js-book__has-read-btn'];
      if (book.hasRead) btnClasses = [...btnClasses, 'read'];
      values = [
        ...values,
        this.createViewElement(
          'button',
          btnClasses,
          '',
          book.hasRead ? 'Read' : 'Not Read'
        ),
        this.createViewElement(
          'button',
          ['js-book__delete-btn', 'close-btn'],
          '',
          'X'
        )
      ];
    } else {
      values = [
        ...values,
        this.createViewElement(
          'button',
          ['js-book__add-to-library-btn'],
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
