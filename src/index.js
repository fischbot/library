import UserLibrary from './UserLibrary/UserLibrary';
import handleClick from './utils/handleClick';
import { checkStorage } from './utils/storage';
import './main.scss';

(function() {
  let library = new UserLibrary(checkStorage());

  let searchQuery = '';

  document.addEventListener(
    'click',
    e => handleClick(e, library, searchQuery),
    false
  );
})();
