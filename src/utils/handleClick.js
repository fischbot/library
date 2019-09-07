import Search from '../Search/Search';
import Modal from '../Modal/Modal';
import SearchForm from '../SearchForm/SearchForm';
import CustomForm from '../CustomForm/CustomForm';

let modal;
let resultsModal;
let searchResults;
let form;
function handleClick(e, library, searchQuery) {
  const target = e.target;
  let id = target.id;

  if (target.classList.contains('js-book__has-read-btn')) {
    library.handleReadStatus(target, library.books);
  } else if (target.classList.contains('js-open-modal-btn')) {
    modal = new Modal(id);

    if (id === 'js-search') {
      id = 'search';
      form = new SearchForm(modal.contentContainer.id);
    }

    if (id === 'js-custom') {
      id = 'custom';
      form = new CustomForm(modal.contentContainer.id);
    }

    form.render();
  } else if (target.classList.contains('js-modal__close-btn')) {
    modal.remove();
    modal = undefined;
  } else if (target.classList.contains('js-sort-btn')) {
    library.handleSort(id);
  } else if (target.classList.contains('js-book__delete-btn')) {
    library.handleRemove(target.parentNode.id);
  } else if (id === 'search-btn') {
    searchQuery = form.getSearchValue();

    modal.remove();
    modal = undefined;

    resultsModal = new Modal('results');

    searchResults = new Search(resultsModal.contentContainer.id, searchQuery);

    searchResults.run();
  } else if (target.classList.contains('js-book_add-to-library-btn')) {
    // add book to user's library by grabbing matching id from results and re-render
    library.handleAddBookFromSearch(
      searchResults.results.books,
      target.parentNode.id
    );
    // close modal
    resultsModal.remove();
    resultsModal = undefined;
  } else if (id === 'custom-submit-btn') {
    modal.remove();
    modal = undefined;
    let book = form.handleSubmit(library.books);
    library.addBookFromCustom(book);
  }

  e.preventDefault();
}

export default handleClick;
