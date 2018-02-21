/* global $ */

'use strict'
var myLibrary = [];
var results = [];
const addBookBtn = document.getElementById('add-book-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const bookList = document.getElementById('book-list');
const sort = document.getElementById('sort');
let entryId = 0;
let asc = {
  // used for sorting ascending/descending
  // (always start in ascending on page load)
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

// ============== Sort functions ==============================================
function titleAndAuthorSort(prop) {
  myLibrary.sort(function(a, b) {
    let valueA, valueB;
    if (prop === 'title') {
      valueA = a[prop].toUpperCase();       // ignore case
      valueB = b[prop].toUpperCase();
    }
    // TODO fix - not sorting correctly
    if (prop === 'authors') {                   // uses first author if there is more than 1
      if (Array.isArray(a[prop])) {
        valueA = a[prop][0].toUpperCase();    // ignore case
      }

      if (Array.isArray(b[prop])) {
        valueB = b[prop][0].toUpperCase();
      }

      if (!Array.isArray(a[prop]) && !Array.isArray(b[prop])) {
        // console.log('not arrays!');
        valueA = a[prop].toUpperCase();    // ignore case
        valueB = b[prop].toUpperCase();
      }
    }

    console.log(`valueA: ${valueA} | valueB: ${valueB}`)

    if (asc[prop]) {
      return stringSort(valueA, valueB);        // sort in ascending order
    } else {
      return stringSort(valueB, valueA)         // sort in descending order
    }
  });
  asc[prop] = !asc[prop];
}

function stringSort(value1, value2) {
    if (value1 < value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }
    return 0;                     // names must be equal
}

function readIdAndPageSort(prop) {
  myLibrary.sort(function(a, b){
    let valueA = a[prop];
    let valueB = b[prop];
    if (prop === 'pageCount') {
      if (valueA === '[unavailable]') {
          valueA = 99999;
      }
      if (valueB === '[unavailable]') {
          valueB = 99999;
      }
    }

    if (asc[prop]) {             // sort in ascending order
      return valueA - valueB;
    } else {                      // sort in descending order
      return valueB - valueA;
    }
  });
  asc[prop] = !asc[prop];
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

      setReadStatusButtonColor(book);
    });
  }

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

function addClassesToElements(elements, context) {
  elements.addToLibraryBtn.classList.add('add-to-library-btn');
  elements.searchResultItem.classList.add('search-result-item');
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
      titleAndAuthorSort('title');
      render();
      break;
    case ('sort-by-author'):

      titleAndAuthorSort('authors');
      render();
      break;
    case ('sort-by-pages'):
      readIdAndPageSort('pageCount');
      render();
      break;
    case ('sort-by-recent'):
      readIdAndPageSort('id');
      render();
      break;
    case ('sort-by-read'):
      readIdAndPageSort('hasRead');
      render();
      break;
  }

  // Read and Delete Buttons
  if (elementClicked.classList.contains('read-btn')) {
    // get the parent element of the button clicked and use the ID to match
    // the entry in myLibrary
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
    render();
  } else if (elementClicked.classList.contains('add-to-library-btn')) {
    // add book to library
    let elementClickedId = e.target.id;
    storeSelectedBook(elementClickedId);
    delete results[elementClickedId].searchId;
    toggleModal();
    togglePageOverlay();
    clearSearches();
    render();
// ============== Toggle functions ============================================
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
// ============== END clickHandler ============================================

function togglePageOverlay() {
  let overlayPlaceholder = document.querySelector('.overlay-placeholder');
  if (overlayPlaceholder.id === 'overlay') {
    overlayPlaceholder.removeAttribute('id');
  } else {
    overlayPlaceholder.id = 'overlay';
  }

}

function toggleModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
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
}

// ============== Search Functions ============================================

// TODO split up into multiple functions
function runSearch() {
  let search = document.getElementById('books').value;
    if (search === '') {
      // TODO
      console.log('Enter a book to search for');
      alert('Enter a book to search for'); // TODO temporary notification
    } else {
      $.get('https://www.googleapis.com/books/v1/volumes?q=' + search, function(response) {
        response.items.forEach(function(item, index) {
          let book = new Book();
          const elements = createHtmlElementsForEntry('search');
          addClassesToElements(elements, 'search');

          elements.addToLibraryBtn.innerText = 'Add to Library';

          setBookSearchResult(book, item, index);
          elements.searchResultItem.id = book.searchId;
          // TODO DRY this with render
          if (book.imgUrl !== undefined) {
            let img = document.createElement('img');
            elements.img.src = book.imgUrl;
          }

          appendEntries(elements, 'search');

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
  // TODO find index of id in results
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

// =============== SAMPLE DATA ================================================
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
