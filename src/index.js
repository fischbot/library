import Library from './Library/Library';
import View from './View/View';
import './main.css';

(function() {
  const library = new Library();
  const view = new View();
  view.renderLibrary(library.books);
})();
