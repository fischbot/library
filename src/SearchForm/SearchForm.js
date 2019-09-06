import Form from '../Form/Form';
import './SearchForm.styles.css';

class SearchForm extends Form {
  constructor(containerId) {
    super(containerId);
    this.init();
    this.searchValue = '';
    this.formClasses = ['search-form'];
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
