import Book from '../Book/Book';
import Library from '../Library/Library';

class Search {
  constructor() {
    this.API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    this.searchValue = document.getElementById('book-search').value;
    this.results = new Library();
  }

  run() {
    let books = [];
    fetch(`${this.API_URL}${this.searchValue}`)
      .then(response => response.json())
      .then(response => {
        books = response.items.map(item => {
          const book = this.createBook(item);
          this.results.add(book);
        });
        console.log(this.results.books);
        // response.items.forEach(function(item, index) {
        //   let book = setBookSearchResult(item, index);
        //   const elements = createHtmlElementsForEntryAndSearchResults('search');
        //   elements.searchResultItem.id = book.searchId;

        //   appendEntries(elements, 'search');
        //   elements.addToLibraryBtn.id = book.searchId;
        //   elements.addToLibraryBtn.innerText = 'Add to Library';
        //   addEntryText(elements, book, 'search');
        // });
      })
      .catch(error => {
        alert('Something went wrong');
        console.error('There was an error:', error);
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
