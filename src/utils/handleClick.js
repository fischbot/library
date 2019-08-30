function handleClick(e, books, view) {
  const target = e.target;
  const id = target.id;
  if (target.classList.contains('book-has-read-btn')) {
    handleReadStatus(e.target, books, view.updateReadView);
  } else if (target.classList.contains('add-book-buttons')) {
    view.renderBookForm(id);
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

export default handleClick;
