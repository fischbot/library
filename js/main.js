/* global $ */

'use strict'
let myLibrary = [];
let results = [];
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

// Book constructor
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
    if (storageAvailable('localStorage')) {
      if (!window.localStorage.getItem('library')) {
        // if the library is empty, add sample data
        // this is so the user can see how the app is supposed to look
        populateSampleData();
      } else {
        // get the stored data
        retrieveFromLocalStorage();
      }
    } else {
      alert('Sorry, localStorage is not available with your browser. ' +
            'You won\'t be able to save your library. :(');
      populateSampleData();
    }
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

function setReadStatusButtonColor(book) {
  let entry = document.getElementById(`${book.id}`);
  if (book.hasRead) {
    entry.lastElementChild.classList.add('read');
  } else {
    entry.lastElementChild.classList.remove('read');
  }
}

// ============== Storage functions ============================================
function saveToLocalStorage() {
  let lib = JSON.stringify(myLibrary);
  window.localStorage.setItem('library', lib);
}

function retrieveFromLocalStorage() {
  let data = window.localStorage.getItem('library');
  let localData = JSON.parse(data);
  localData.forEach(function(book) {
    myLibrary.push(book);
  });
}

function updateLocalStorage() {
  // clear localStorage
  window.localStorage.clear();
  // repopulate
  saveToLocalStorage();
}

function storageAvailable(type) {
  try {
    var storage = window[type],
        x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
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
      const elements = createHtmlElementsForEntryAndSearchResults('render');
      elements.entry.id = book.id;
      elements.entry.classList.add('entry');

      appendEntries(elements, 'render');
      addEntryText(elements, book, 'render');
      setReadStatusButtonColor(book);
    });
  }

  if (storageAvailable('localStorage')) {
    updateLocalStorage();
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
    appendChildToParent('search-results', elements.searchResultItem);
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

function appendChildToParent(parentIdTagOrClassName, child) {
  let parent;
  if (document.getElementById(`${parentIdTagOrClassName}`)) {
    // id
    parent = document.getElementById(`${parentIdTagOrClassName}`);
  } else { // class or tag
    if (document.querySelector('.' + `${parentIdTagOrClassName}`)) {
      // class
      parentIdTagOrClassName = '.' + parentIdTagOrClassName;
      parent = document.querySelector(`${parentIdTagOrClassName}`);
    } else {
      // tag
      parent = document.querySelector(`${parentIdTagOrClassName}`);
    }
  }
  parent.appendChild(child);
}

// returns a single html element with the provided class or id
function createHtmlElement(elementType, classNameOrId, specifyClassOrId) {
  let element = document.createElement(`${elementType}`);
  if (classNameOrId !== '') {
    if (specifyClassOrId.toLowerCase() === 'class') {
      element.classList.add(`${classNameOrId}`);
    } else {
      element.id = classNameOrId;
    }
  }

  return element;
}

// returns an object of elements for search or render
function createHtmlElementsForEntryAndSearchResults(context) {
  let elements = {};
  let prefix;
  if (context === 'render') {
    elements.delBtn = createButton('del-btn', '-');
    elements.readBtn = createButton('read-btn', '');
    elements.entry = createHtmlElement('div', 'entry', 'class');
    prefix = 'entry-';
  }

  if (context === 'search') {
    elements.addToLibraryBtn = createHtmlElement('button', 'add-to-library-btn', 'class');
    elements.searchResultItem = createHtmlElement('div', 'search-result-item', 'class');
    prefix = 'search-result-';
  }

  elements.img = createHtmlElement('img', prefix + 'img', 'class');
  elements.entryTitle = createHtmlElement('h2', prefix +  'title', 'class');
  elements.entryAuthor = createHtmlElement('h3', prefix + 'author', 'class');
  elements.entryDate = createHtmlElement('p', prefix + 'publish-date', 'class');
  elements.entryPageCount = createHtmlElement('p', prefix + 'page-count', 'class');
  elements.entryDescription = createHtmlElement('p', prefix + 'description', 'class');

  return elements;
}

// ============== Handlers ====================================================
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

  if (elementClicked.classList.contains('read-btn')) {
    let entry = elementClicked.parentNode;
    elementClicked.innerText = toggleRead(entry);
  } else if (elementClicked.classList.contains('del-btn')) {
    delBtnHandler(elementClicked);
  } else if (elementClicked.classList.contains('add-to-library-btn')) {
    addToLibraryBtnHandler(elementClicked);
  }
}

function delBtnHandler(elementClicked) {
  // delete book from library and remove it from bookList
  let bookId = elementClicked.parentNode.id;
  let entryToRemove = document.getElementById(`${bookId}`);
  let indexOfEntry = myLibrary.findIndex(function(i) {
    return i.id == bookId;
  });
  bookList.removeChild(entryToRemove);
  myLibrary.splice(indexOfEntry,1);
  render();
}

function addToLibraryBtnHandler(elementClicked) {
  // add book from search results to library
  let elementClickedId = elementClicked.id;
  storeSelectedBook(elementClickedId);
  delete results[elementClickedId].searchId;
  toggleModal();
  togglePageOverlay();
  clearSearches();
  render();
}

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

function togglePageOverlay() {
  let page = document.getElementById('page');
  if (document.getElementById('overlay')) {
    page.removeChild(document.getElementById('overlay'));
  } else {
    let overlay = document.createElement('div');
    page.appendChild(overlay);
    overlay.id = 'overlay';
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
      alert('Enter a book to search for');
    } else {
      $.get('https://www.googleapis.com/books/v1/volumes?q=' + search, function(response) {
        response.items.forEach(function(item, index) {
          let book = new Book();
          const elements = createHtmlElementsForEntryAndSearchResults('search');

          setBookSearchResult(book, item, index);
          elements.searchResultItem.id = book.searchId;
          // TODO DRY this with render
          if (book.imgUrl !== undefined) {
            let img = document.createElement('img');
            elements.img.src = book.imgUrl;
          }

          appendEntries(elements, 'search');
          elements.addToLibraryBtn.id = book.searchId;
          elements.addToLibraryBtn.innerText = 'Add to Library';
          addEntryText(elements, book, 'search');
        });
      });

    }
}

// Store book info retrieved from API into book object
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

// Store the book obj selected by the user in the user's library
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

// change http to https
function fixImgUrl(url){
  let strArray = url.split(':')
  return strArray[0] + 's:' + strArray[1];
}

// =============== SAMPLE DATA ================================================
function populateSampleData() {
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

  const nineteen84 = new Book('1984', 'George Orwell', 2008, '', '',  325, setId(), true);

  const got = new Book('A Game of Thrones 4-Book Bundle', '2011-03-22', 'George R. R. Martin', 'George R. R. Martin\'s A Song of Ice and Fire series has become, in many ways, the gold standard for modern epic fantasy. Martin—dubbed the "American Tolkien" by Time magazine—has created a world that is as rich and vital as any piece of historical fiction, set in an age of knights and chivalry and filled with a plethora of fascinating, multidimensional characters that you love, hate to love, or love to hate as they struggle for control of a divided kingdom. It is this very vitality that has led it to be adapted as the HBO miniseries “Game of Thrones.” This bundle includes the following novels: A GAME OF THRONES A CLASH OF KINGS A STORM OF SWORDS A FEAST FOR CROWS', 'https://books.google.com/books/content?id=mA8A4BYWB1IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 3264, setId(), false);

  myLibrary.push(hobbit);
  myLibrary.push(fotr);
  myLibrary.push(nineteen84);
  myLibrary.push(got);
}
