import ViewLibrary from '../ViewLibrary/ViewLibrary';
import './ViewSearchResults.styles.scss';
import '../utils/spinner.scss';

class ViewSearchResults extends ViewLibrary {
  constructor(containerId, results) {
    super(containerId);
    this.msg = 'No matches';
    this.spinner = this.createViewElement('div', ['loader', 'sbl-circ']);
  }

  toggleLoading() {
    this.containerId.contains(this.spinner)
      ? this.spinner.remove()
      : this.containerId.appendChild(this.spinner);
  }
}

export default ViewSearchResults;
