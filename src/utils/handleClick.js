import Search from '../Search/Search';
import Modal from '../Modal/Modal';
import SearchForm from '../SearchForm/SearchForm';

let modal;
let resultsModal;
let searchResults;
let form;
function handleClick(e, library, searchQuery) {
  const target = e.target;
  const id = target.id;

  if (target.classList.contains('book-has-read-btn')) {
    library.handleReadStatus(target, library.books);
  } else if (target.classList.contains('open-modal-btn')) {
    modal = new Modal(id);

    if (id === 'search') form = new SearchForm(modal.contentContainer.id);

    if (id === 'custom') form = new CustomForm(modal.contentContainer.id);

    form.render();
  } else if (target.classList.contains('close-modal-btn')) {
    modal.remove();
    modal = undefined;
  } else if (target.classList.contains('sort-btn')) {
    library.handleSort(id);
  } else if (target.classList.contains('book-delete-btn')) {
    library.handleRemove(target.parentNode.id);
  } else if (id === 'search-btn') {
    searchQuery = form.getSearchValue();

    modal.remove();
    modal = undefined;

    resultsModal = new Modal('results');

    searchResults = new Search(resultsModal.contentContainer.id, searchQuery);

    searchResults.run();
  } else if (target.classList.contains('add-to-library-btn')) {
    // add book to user's library by grabbing matching id from results and re-render
    library.handleAddBook(searchResults.results.books, target.parentNode.id);
    // close modal
    resultsModal.remove();
    resultsModal = undefined;
  }

  e.preventDefault();
}

export default handleClick;
