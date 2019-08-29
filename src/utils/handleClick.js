function handleClick(e, books, updateReadView) {
  const classes = Array.prototype.slice.call(e.target.classList, 0);

  if (classes.indexOf('book-has-read-btn') !== -1) {
    handleReadStatus(e.target, books, updateReadView);
  }
}

function handleReadStatus(target, books, updateReadView) {
  for (let book of books) {
    if (book.id === target.parentNode.id) {
      book.hasRead = book.changeReadStatus(book);
      updateReadView(target);
      break;
    }
  }
}

export default handleClick;
