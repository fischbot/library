import ViewLibrary from '../ViewLibrary/ViewLibrary';

class ViewSearchResults extends ViewLibrary {
  constructor(containerId, results) {
    super(containerId);
    this.msg = 'No matches';
  }
}

export default ViewSearchResults;
