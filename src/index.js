import UserLibrary from './UserLibrary/UserLibrary';
import handleClick from './utils/handleClick';
import sampleData from './assets/sample_data';
import './main.scss';

(function() {
  const library = new UserLibrary(sampleData);

  let searchQuery = '';

  document.addEventListener(
    'click',
    e => handleClick(e, library, searchQuery),
    false
  );
})();
