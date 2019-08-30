import Library from './Library/Library';
import View from './View/View';
import handleClick from './utils/handleClick';
import './main.css';

(function() {
  const library = new Library();
  const view = new View();
  const { books } = library;
  document.addEventListener('click', e => handleClick(e, books, view), false);
  view.renderLibrary(books);
})();
