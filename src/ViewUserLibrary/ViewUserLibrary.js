import ViewLibrary from '../ViewLibrary/ViewLibrary';
import './ViewUserLibrary.styles.scss';

// User Library has its own class in case I want to add future features
class ViewUserLibrary extends ViewLibrary {
  constructor(containerId) {
    super(containerId);
  }
}

export default ViewUserLibrary;
