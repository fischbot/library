/* global $ */

'use strict'
var myLibrary = [];
var results = [];
const addBookBtn = document.getElementById('add-book-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const bookList = document.getElementById('book-list');
const sort = document.getElementById('sort');
const addYourOwnBook = document.getElementById('add-your-own-book')
let entryId = 0;

// used for sorting ascending/descending (always start in ascending on page load)
let asc = {
  title : true,
  pageCount : true,
  authors : true,
  id : true,
  hasRead : true,
}

function Book(title, authors, publishedDate, description, imgUrl, pageCount, id, hasRead) {
  this.title = title || 'title unavailable';
  this.authors = authors || '[unavailable]';
  this.publishedDate = publishedDate || '[unavailable]';
  this.description = description || '[description unavailable]';
  this.imgUrl = imgUrl || undefined;
  this.pageCount = pageCount || '[unavailable]';
  this.id = id;
  this.hasRead = hasRead || false;
}

window.addEventListener('load', function() {
    render();
    document.addEventListener('click', clickHandler, false);

}, false);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function setId() {
  return entryId++;
}

function chooseSort(prop) {
  if (prop === 'id') {
    // sort by recently added
    myLibrary.sort(function(a, b){
      if (asc.id) {
        // sort in ascending order
        return a[prop] - b[prop];
      } else {
        // sort in descending order
        return b[prop] - a[prop];
      }

    });
  } else if (prop === 'pageCount') {
    // sort by amount of pages
    myLibrary.sort(function(a, b){
      let propA = a.pageCount;
      let propB = b.pageCount;

      // assign high number of pages to any book with no page count listed
      // so they get sorted to the end
      if (propA === '[unavailable]') {
          propA = 99999;
      }
      if (propB === '[unavailable]') {
          propB = 99999;
      }

      if (asc.pageCount) {
        // sort in ascending order
        return propA - propB;
      } else {
        // sort in descending order
        return propB - propA;
      }
    });
  } else if (prop === 'authors') {
    // sort by author
    // uses first author if there is more than 1
    myLibrary.sort(function(a, b) {
      let propA = a[prop][0].toUpperCase(); // ignore case
      let propB = b[prop][0].toUpperCase();
      if (asc.authors) {
        // sort in ascending order
        if (propA < propB) {
          return -1;
        }
        if (propA > propB) {
          return 1;
        }
        // names must be equal
        return 0;
      } else {
        // sort in descending order
        if (propA > propB) {
          return -1;
        }
        if (propA < propB) {
          return 1;
        }
        // names must be equal
        return 0;
      }

    });
  } else if (prop === 'hasRead') {
    // sort by read status
    myLibrary.sort(function(a, b) {
      if (asc.hasRead) {
        // sort in ascending order
        return a[prop] - b[prop];
      } else {
        // sort in descending order
        return b[prop] - a[prop];
      }
    });
  } else {
    // sort by title
    if (asc.title) {
      // sort in ascending order
      myLibrary.sort(function(a, b) {
        let propA = a[prop].toUpperCase(); // ignore case
        let propB = b[prop].toUpperCase();
        if (propA < propB) {
          return -1;
        }
        if (propA > propB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else {
      // sort in descending order
      myLibrary.sort(function(a, b) {
        let propA = a[prop].toUpperCase(); // ignore case
        let propB = b[prop].toUpperCase();
        if (propA > propB) {
          return -1;
        }
        if (propA < propB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }

  }
}

// TODO DRY UP if possible - compare with toggleRead()
function setReadStatusButtonColor(book) {
  let entry = document.getElementById(`${book.id}`);
  if (book.hasRead) {
    // TODO get entry that matches book id
    entry.lastElementChild.classList.add('read');
  } else {
    entry.lastElementChild.classList.remove('read');
  }
}

function toggleRead(entry) {
  let text = '';
  // find the book with the ID that matches the entry ID
  let indexOfEntry = myLibrary.findIndex(function(i) {
    return i.id == entry.id;
  });
  let book = myLibrary[indexOfEntry];

  book.hasRead = !book.hasRead;

  if (book.hasRead) {
    text = 'Read';
    entry.lastElementChild.classList.add('read');
  } else {
    text = 'Not Read';
    entry.lastElementChild.classList.remove('read');
  }

  return text;
}
// ============== render functions ============================================
function render() {
  clearBookList();

  if (myLibrary.length === 0) {
    // if there are no books in library/ all books have been deleted
    bookList.innerText = 'Your library is empty!'; // TODO needs better solution
    sort.classList.add('hidden');
  } else {
    if (sort.classList.contains('hidden')) {
      // display sorting bar if there are book entries in the library
      sort.classList.remove('hidden');
    }
    myLibrary.forEach( function(book) {
      const elements = createHtmlElementsForEntry('render');
      elements.entry.id = book.id;
      elements.entry.classList.add('entry');

      appendEntries(elements, 'render');
      addEntryText(elements, book, 'render');

}

function addEntryText(elements, book, context) {

  if (context === 'render') {
    let readStatus;
    if (book.hasRead) {
      readStatus = 'Read';
    } else {
      readStatus = 'Not Read'
    }
    elements.readBtn.innerText = readStatus;
  }

  elements.entryTitle.innerText = book.title;
  if (book.imgUrl) {
    elements.img.src = book.imgUrl;
  } else {
    elements.img.src = './img/none.jpg';
  }

  elements.entryAuthor.innerText = 'by ' + book.authors;
  elements.entryDate.innerText = 'Published: ' + book.publishedDate;
  elements.entryPageCount.innerText = book.pageCount + ' pages';
  elements.entryDescription.innerText = book.description;
}

function appendEntries(elements, context) {
  let property = '';

  if (context === 'render') {
    property = 'entry';
    bookList.appendChild(elements.entry);
  }

  if (context === 'search') {
    property = 'searchResultItem';
    elements.searchResults.appendChild(elements.searchResultItem);
  }

  elements[property].appendChild(elements.entryTitle);
  elements[property].appendChild(elements.entryAuthor);
  elements[property].appendChild(elements.img);
  elements[property].appendChild(elements.entryDate);
  elements[property].appendChild(elements.entryPageCount);
  elements[property].appendChild(elements.entryDescription);


  // TODO fix this so it's DRY
  // I did it this way for now because this is the order I need to append the elements in
  if (context === 'render') {
    elements[property].appendChild(elements.delBtn);
    elements[property].appendChild(elements.readBtn);
  }

  if (context === 'search') {
    elements[property].appendChild(elements.addToLibraryBtn);
  }
}

function createButton(className, innerText) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.innerText = innerText;
  return button;
}

function createHtmlElementsForEntry(context) {
  let elements = {};

  if (context === 'render') {
    elements.delBtn = createButton('del-btn', '-');
    elements.readBtn = createButton('read-btn', '');
    elements.entry = document.createElement('div');
  }

  if (context === 'search') {
    elements.addToLibraryBtn = document.createElement('button');
    elements.searchResults = document.getElementById('search-results');
    elements.searchResultItem = document.createElement('div');
  }

  elements.img  = document.createElement('img');
  elements.entryTitle = document.createElement('h2');
  elements.entryAuthor = document.createElement('h3');
  elements.entryDate = document.createElement('p');
  elements.entryPageCount = document.createElement('p');
  elements.entryDescription = document.createElement('p');

  return elements;
}

// ============================================================================
function toggleModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

// ============== clickHandler ================================================
function clickHandler(e) {
  let elementClicked = e.target;

  switch(elementClicked.id) {
    case ('open-search-modal-btn') :
      toggleModal();
      togglePageOverlay();
      break;
    case ('close-modal-btn') :
      toggleModal();
      togglePageOverlay();
      clearSearches();
      break;
    case ('search-btn') :
      runSearch();
      clearSearches();
      break;
    case ('add-your-own-book-btn') :
      break;
    case ('sort-by-title'):
      chooseSort('title');
      asc.title = !asc.title;
      render();
      break;
    case ('sort-by-author'):
      chooseSort('authors');
      asc.authors = !asc.authors;
      render();
      break;
    case ('sort-by-pages'):
      chooseSort('pageCount');
      asc.pageCount = !asc.pageCount;
      render();
      break;
    case ('sort-by-recent'):
      chooseSort('id');
      asc.id = !asc.id;
      render();
      break;
    case ('sort-by-read'):
      chooseSort('hasRead');
      asc.hasRead = !asc.hasRead;
      render();
      break;
  }

  // Read and Delete Buttons
  if (elementClicked.classList.contains('read-btn')) {

    let entry = elementClicked.parentNode;
    elementClicked.innerText = toggleRead(entry);

  } else if (elementClicked.classList.contains('del-btn')) {
    let bookId = elementClicked.parentNode.id;
    let entryToRemove = document.getElementById(`${bookId}`);
    let indexOfEntry = myLibrary.findIndex(function(i) {
      return i.id == bookId;
    });

    bookList.removeChild(entryToRemove);
    myLibrary.splice(indexOfEntry,1);

  } else if (elementClicked.classList.contains('add-to-library-btn')) {
    // add book to library
    let elementClickedId = e.target.id;
    storeSelectedBook(elementClickedId);
    delete results[elementClickedId].searchId;
    toggleModal();
    togglePageOverlay();
    clearSearches();
    render();
  }
}
// ============== END clickHandler ============================================

function togglePageOverlay() {
  let overlayPlaceholder = document.querySelector('.overlay-placeholder');
  if (overlayPlaceholder.id === 'overlay') {
    overlayPlaceholder.removeAttribute('id');
  } else {
    overlayPlaceholder.id = 'overlay';
  }

}

// ============== Clearing Functions ==========================================
function clearInputs() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.value = '';
  });
}

function clearBookList() {
  while (bookList.hasChildNodes()) {
    bookList.removeChild(bookList.lastChild);
  }
}

function clearSearches() {
  results = []; // clear results from previous search
  clearInputs();
  const searchResults = document.getElementById('search-results');
  while (searchResults.hasChildNodes()) {
    searchResults.removeChild(searchResults.lastChild);
  }

  addYourOwnBook.classList.remove('hidden');
}

// ============== Search Functions ============================================

// TODO split up into multiple functions
function runSearch() {
  // let search = $('#books').val();
  let search = document.getElementById('books').value;

    if (search === '') {
      // TODO
      console.log('Enter a book to search for');
      alert('Enter a book to search for'); // TODO temporary notification
    } else {
      $.get('https://www.googleapis.com/books/v1/volumes?q=' + search, function(response) {
        addYourOwnBook.classList.remove('hidden');
        response.items.forEach(function(item, index) {
          let book = new Book();
          const elements = createHtmlElementsForEntry('search');
          elements.addToLibraryBtn.classList.add('add-to-library-btn');
          elements.addToLibraryBtn.innerText = 'Add to Library';
          elements.searchResultItem.classList.add('search-result-item');
          setBookSearchResult(book, item, index);
          elements.searchResultItem.id = book.searchId;
          if (book.imgUrl !== undefined) {
            let img = document.createElement('img');
            elements.img.src = book.imgUrl;
          }

          appendEntries(elements, 'search');
          // TODO fix the id - might be the problem with it adding the wrong search result to the library
          // elements.addToLibraryBtn.id = index;
          elements.addToLibraryBtn.id = book.searchId;

          addEntryText(elements, book, 'search');
        });
      });

    }
}

function setBookSearchResult(book, item, index) {
  book.searchId = index;
  book.title = item.volumeInfo.title || '[unavailable]';
  book.authors = item.volumeInfo.authors || '[unavailable]' ;
  book.publishedDate = item.volumeInfo.publishedDate || '[unavailable]';
  book.description = item.volumeInfo.description || '[description unavailable]';
  book.pageCount = item.volumeInfo.pageCount || '[unavailable]';
  results.push(book);

  if (item.volumeInfo.imageLinks !== undefined) {
    book.imgUrl = fixImgUrl(item.volumeInfo.imageLinks.thumbnail);
  }
}

// Store the book selected by the user in the user's library
function storeSelectedBook(id) { // id == book.searchId
  let index = results.findIndex(function(i) {
    return i.searchId == id;
  });

  results[index].id = setId();

  addBookToLibrary(results[index]);
  clearInputs(); // TODO clear search box
  render();
}

function fixImgUrl(url){
  // change http to https
  let strArray = url.split(':')
  return strArray[0] + 's:' + strArray[1];
}

// title, authors, publishedDate, description, imgUrl, pageCount, id, hasRead

// Sample data
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '1982',
                      'Chronicles the adventures of the inhabitants of Middle-earth and Bilbo Baggins,' +
                      'the hobbit who brought home to The Shire the One Ring of Power',
                      'https://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                      304, setId(),
                      true
);
const fotr = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', '',
                    'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
                    '', '', setId(), false
);
const twoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', '',
                          'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
                          '', '', setId(), false);
const rotc = new Book('The Return of the King', 'J.R.R. Tolkien', '', '', '', '', setId(), false);

const prideAndPrejudice = new Book('Pride and Prejudice', 'Jane Austin', 1870, '', 'https://books.google.com/books/content?id=dalDAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 332, setId(), false);

const animalFarm = new Book('Animal Farm', 'George Orwell', '', 'George Orwell\’s famous satire of the Soviet Union, in which “all animals are equal but some animals are more equal than others.”', 'https://books.google.com/books/content?id=nkalO3OsoeMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 144, setId(), true);

const nineteen84 = new Book('1984', 'George Orwell', 2008, '', '',  325, setId(), true);

myLibrary.push(hobbit);
myLibrary.push(fotr);
myLibrary.push(twoTowers);
myLibrary.push(rotc);
myLibrary.push(prideAndPrejudice);
myLibrary.push(animalFarm);
myLibrary.push(nineteen84);
