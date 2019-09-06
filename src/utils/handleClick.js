import Search from '../Search/Search';
import Modal from '../Modal/Modal';
import SearchForm from '../SearchForm/SearchForm';

let modal;
let search;
let form;
function handleClick(e, library, userLibraryView, searchQuery) {
  const target = e.target;
  const id = target.id;
  // if (target.id === 'search-btn') debugger;
  console.log(id);
  if (target.classList.contains('book-has-read-btn')) {
    // update read view
    userLibraryView.handleClick(target, library.books);
  } else if (target.classList.contains('open-modal-btn')) {
    modal = new Modal(id);
    if (id === 'search') form = new SearchForm(modal.contentParent.id);

    // if (id === 'custom') form = new CustomForm('custom-modal');

    form.render();
  } else if (id === 'search-btn') {
    searchQuery = form.getSearchValue();

    modal.hide();
    let resultsModal = new Modal('results');

    search = new Search(resultsModal.contentParent.id, searchQuery);

    // modal.clearView(modal.parent);

    search.run();
  } else if (target.classList.contains('close-modal-btn')) {
    modal.remove();
    modal = undefined;
  } else if (target.classList.contains('sort-btn')) {
    // sort library
    userLibraryView.sort(id, library.books);
  } else if (target.classList.contains('book-delete-btn')) {
    // delete the selected book
    library.remove(target.parentNode.id);
    userLibraryView.updateView(library.books);
  }
  e.preventDefault();
}

export default handleClick;
