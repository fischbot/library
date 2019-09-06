import Book from '../Book/Book';
import Library from '../Library/Library';
import ViewSearchResults from '../ViewSearchResults/ViewSearchResults';

class Search {
  constructor(containerId, searchValue) {
    this.searchValue = searchValue;
    this.results = new Library();
    this.view = new ViewSearchResults(containerId, this.results);
  }

  run() {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    let books = [];
    fetch(`${API_URL}${this.searchValue}`)
      .then(response => response.json())
      .then(response => {
        books = response.items.map(item => {
          const {
            title,
            authors,
            publishedDate,
            description,
            imgUrl,
            pageCount
          } = item.volumeInfo;

          const book = new Book(
            title,
            authors,
            publishedDate,
            description,
            imgUrl,
            pageCount
          );
          this.results.add(book);
        });
        this.view.render(this.results.books, true);
      })
      .catch(error => {
        this.view.emptyMsg('Something went wrong');
        console.error('Error:', error);
      });
  }
}
export default Search;
