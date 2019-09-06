import Book from '../Book/Book';
import Library from '../Library/Library';
import ViewLibrary from '../ViewLibrary/ViewLibrary';

class Search extends ViewLibrary {
  constructor(parentId, searchValue) {
    super(parentId);
    this.searchValue = searchValue;
    this.results = new Library();
  }

  run() {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    let books = [];
    fetch(`${API_URL}${this.searchValue}`)
      .then(response => response.json())
      .then(response => {
        books = response.items.map(item => {
          const book = this.createBook(item);
          this.results.add(book);
        });

        this.render(this.results.books);
      })
      .catch(error => {
        this.emptyMsg('Something went wrong');
        console.error('Error:', error);
      });
  }

  createBook(item) {
    return new Book(
      item.volumeInfo.title,
      item.volumeInfo.authors,
      item.volumeInfo.publishedDate,
      item.volumeInfo.description,
      item.volumeInfo.imgUrl,
      item.volumeInfo.pageCount,
      '',
      false
    );
  }
}
export default Search;
