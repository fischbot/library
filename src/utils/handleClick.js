import Search from '../Search/Search';

function handleClick(e, library, userLibraryView) {
  const target = e.target;
  const id = target.id;

  if (target.classList.contains('book-has-read-btn')) {
    // update read view
    userLibraryView.handleClick(target, library.books);
  } else if (target.classList.contains('add-book-buttons')) {
    // display add book form
    view.renderBookForm(id);
  } else if (target.classList.contains('sort-btn')) {
    // sort library
    userLibraryView.sort(id, library.books);
  } else if (target.classList.contains('book-delete-btn')) {
    // delete the selected book
    library.remove(target.parentNode.id);
    userLibraryView.updateView(library.books);
  } else if (id === 'search-btn') {
    // run search
    const search = new Search();
    search.run();
    // display results

    view.renderSearchResults(search.results.books);
  }
}

// function handleReadStatus(target, books, updateReadView) {
//   for (let book of books) {
//     if (book.id === target.parentNode.id) {
//       book.hasRead = book.toggleReadStatus(book);
//       updateReadView(target);
//       break;
//     }
//   }
// }

export default handleClick;
