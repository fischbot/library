import { toggleModalView } from '../utils/viewHelpers';

function viewAddBookForm(id) {
  const formToView = id.includes('custom')
    ? 'custom-book-modal'
    : 'search-modal';
  toggleModalView(formToView);
}

export default viewAddBookForm;
