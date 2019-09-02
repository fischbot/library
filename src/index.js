import Library from './Library/Library';
import View from './View/View';
import handleClick from './utils/handleClick';
import sampleData from './assets/sample_data';
import './main.css';

(function() {
  const library = new Library(sampleData);
  const view = new View();
  const { books } = library;
  document.addEventListener('click', e => handleClick(e, books, view), false);
  view.renderLibrary('book-list', books);
})();
