import { viewLibrary } from './viewLibrary';

function viewSearchResults(view) {
  // create search modal
  // needs to extend to entire screen w/h
  // results in an inner div

  createSearchView();
  viewLibrary();
}

function createSearchView() {
  const { createViewElement } = view;
  const parent = document.querySelector('body');
  const container = createViewElement(
    'div',
    [],
    'search-results-container',
    ''
  );

  parent.appendChild(container);
}

export default viewSearchResults;
