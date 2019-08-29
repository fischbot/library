import Library from './Library/Library';
import View from './View/View';
import handleClick from './utils/handleClick';
import './main.css';

(function() {
  const library = new Library();
  const view = new View();
  document.addEventListener(
    'click',
    e => handleClick(e, library.books, view.updateReadView),
    false
  );
  view.renderLibrary(library.books);
})();
