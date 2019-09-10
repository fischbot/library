import ViewLibrary from '../ViewLibrary/ViewLibrary';
import './ViewSearchResults.styles.scss';

class ViewSearchResults extends ViewLibrary {
  constructor(containerId, results) {
    super(containerId);
    this.msg = 'No matches';
  }
}

export default ViewSearchResults;
