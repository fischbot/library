import ViewLibrary from '../ViewLibrary/ViewLibrary';
import { updateLocalStorage } from '../utils/storage';
import './ViewUserLibrary.styles.scss';

class ViewUserLibrary extends ViewLibrary {
  constructor(containerId) {
    super(containerId);
  }

  updateView(books) {
    ViewLibrary.prototype.updateView.call(this, books);
    updateLocalStorage(books);
  }
}

export default ViewUserLibrary;
