import { viewLibrary, clearLibraryView } from './viewLibrary';
import viewSearchResults from './viewSearchResults';
import viewAddBookForm from './viewAddBookForm';
import { toggleModalView } from '../utils/viewHelpers';

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

  createViewElement(type, classes, id, content) {
    let elem = document.createElement(type);
    if (classes) classes.map(className => elem.classList.add(className));
    if (id) elem.id = id;
    if (content) {
      type === 'img' ? (elem.src = content) : (elem.innerText = content);
    }
    return elem;
  }

  getElement(id) {
    return document.getElementById(id);
  }

  renderLibrary(parentId, books) {
    const parent = this.getElement(parentId);
    viewLibrary(parent, books, this.createViewElement);
  }

  updateLibraryView(books) {
    clearLibraryView(this.bookList);
    this.renderLibrary(books);
  }

  renderBookForm(id) {
    viewAddBookForm(id);
  }

  renderSearchResults(books) {
    // const resultsContainer = document.getElementById('search-results');
    // // close search form
    // toggleModalView('search-modal');
    // toggleModalView('search-results');
    // // viewSearchResults(resultsContainer, books, this.createViewElement);
    // this.renderLibrary('search-result-booklist', books);
    createSearchView(this.createViewElement);
  }
}

export default View;
