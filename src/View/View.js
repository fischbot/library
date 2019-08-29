import './View.styles.css';

class View {
  constructor() {
    this.bookList = document.getElementById('book-list');
  }

  updateReadView(target) {
    const isRead = target.classList.contains('read');
    target.innerText = isRead ? 'Not Read' : 'Read';
    isRead ? target.classList.remove('read') : target.classList.add('read');
  }

  renderLibrary(books) {
    if (!books) {
      let emptyMsg = createViewElement(
        'p',
        [],
        'empty-library-msg',
        'Your library is empty!'
      );
      this.bookList.appendChild(emptyMsg);
    }
    // clear previous

    books.map(book => {
      const b = createBookView(book);
      this.bookList.appendChild(b);
    });
  }
}

function createViewElement(type, classes, id, content) {
  let elem = document.createElement(type);
  if (classes) classes.map(className => elem.classList.add(className));
  if (id) elem.id = id;
  if (content) {
    type === 'img' ? (elem.src = content) : (elem.innerText = content);
  }
  return elem;
}

function createBookView(book) {
  const container = createViewElement('div', ['book'], book.id);

  const values = [
    createViewElement('h2', ['book-title'], '', book.title),
    createViewElement('h3', ['book-author'], '', book.author),
    createViewElement('img', ['book-img'], '', book.imgUrl),
    createViewElement(
      'p',
      ['book-published-date'],
      '',
      `Published: ${book.publishedDate}`
    ),
    createViewElement('p', ['book-page-count'], '', `${book.pageCount} pages`),
    createViewElement('p', ['book-description'], '', book.description),
    createViewElement(
      'button',
      ['book-has-read-btn', book.hasRead && 'read'],
      '',
      book.hasRead ? 'Read' : 'Not Read'
    ),
    createViewElement('button', ['book-delete-btn'], '', 'X')
  ];
  values.map(value => container.appendChild(value));
  return container;
}

export default View;
