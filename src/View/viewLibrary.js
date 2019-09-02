function viewLibrary(bookList, books, createViewElement) {
  if (!books) {
    let emptyMsg = createViewElement(
      'p',
      [],
      'empty-library-msg',
      'Your library is empty!'
    );
    this.bookList.appendChild(emptyMsg);
  }
  // TODO clear previous
  books.map(book => {
    const b = createBookView(book, createViewElement);
    bookList.appendChild(b);
  });
}

function clearLibraryView(bookList) {
  while (bookList.hasChildNodes()) {
    bookList.removeChild(bookList.lastChild);
  }
}

function createBookView(book, createViewElement) {
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
    createViewElement('p', ['book-page-count'], '', `${book.pages} pages`),
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

export { viewLibrary, clearLibraryView };
