import Library from './Library/Library';
import ViewUserLibrary from './ViewUserLibrary/ViewUserLibrary';
import handleClick from './utils/handleClick';
import sampleData from './assets/sample_data';
import './main.css';

(function() {
  const library = new Library(sampleData);
  const userLibraryView = new ViewUserLibrary('book-list');
  const { books } = library;
  document.addEventListener(
    'click',
    e => handleClick(e, library, userLibraryView),
    false
  );
  userLibraryView.render(books);
})();
