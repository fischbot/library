import { viewLibrary, clearLibraryView } from './viewLibrary';
import viewAddBookForm from './viewAddBookForm';
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

  renderLibrary(books) {
    viewLibrary(this.bookList, books, this.createViewElement);
  }

  updateLibraryView(books) {
    clearLibraryView(this.bookList);
    this.renderLibrary(books);
  }

  renderBookForm(id) {
    viewAddBookForm(id);
  }
}

export default View;
