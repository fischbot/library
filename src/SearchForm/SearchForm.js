import Form from '../Form/Form';

class SearchForm extends Form {
  constructor(parentId) {
    super(parentId);
    this.init();
    this.searchValue = '';
  }

  init() {
    // create an input
    this.input(
      'search',
      'search',
      [],
      'book-search',
      'Enter a book title or author',
      true
    );

    // create a search/submit button
    this.button([], 'search-btn', 'Search');
  }

  getSearchValue() {
    return document.getElementById('book-search').value;
  }
}

export default SearchForm;
