import sort from './sort';

function handleClick(e, books, view) {
  const target = e.target;
  const id = target.id;
  if (target.classList.contains('book-has-read-btn')) {
    handleReadStatus(target, books, view.updateReadView);
  } else if (target.classList.contains('add-book-buttons')) {
    view.renderBookForm(id);
  } else if (target.classList.contains('sort-btn')) {
    // ex: id = 'sort-by-authors', sortType = 'authors'
    const sortType = id.slice(id.lastIndexOf('-') + 1);
    handleSort(sortType, books);
  }
}

function handleReadStatus(target, books, updateReadView) {
  for (let book of books) {
    if (book.id === target.parentNode.id) {
      book.hasRead = book.toggleReadStatus(book);
      updateReadView(target);
      break;
    }
  }
}

function handleSort(type, books) {
  if (type === 'title' || type === 'authors') books = sort.strings(type, books);
  console.log(books);
}

export default handleClick;
