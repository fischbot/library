/* global $ */

'use strict'
var myLibrary = [
  {
    title : 'The Hobbit',
    authors : 'J.R.R. Tolkien',
    publishedDate : '1966',
    description : 'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
    id : 0,
    hasRead : true
  },
  {
    title : 'The Fellowship of the Ring',
    authors : 'J.R.R. Tolkien',
    publishedDate : '1966',
    description : 'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
    id : 1,
    hasRead : false
  },
  {
    title : 'The Two Towers',
    authors : 'J.R.R. Tolkien',
    publishedDate : '1966',
    description : 'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
    id : 2,
    hasRead : false
  },
  {
    title : 'The Return of the King',
    authors : 'J.R.R. Tolkien',
    publishedDate : '1966',
    description : 'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
    id : 3,
    hasRead : true
  },

];
var results = [];
const addBookBtn = document.getElementById('add-book-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const bookList = document.getElementById('book-list');
let entryId = myLibrary.length;

function Book(title, authors, publishedDate, description, categories, imgUrl, hasRead) {
  this.title = title;
  this.authors = authors || 'No author listed';
  this.publishedDate = publishedDate || 'No Date Listed';
  this.description = description;
  this.categories = categories;
  this.imgUrl = imgUrl;
  this.hasRead = hasRead;
}

window.addEventListener('load', function() {
    render();
    initializeReadStatusButtons();
    document.addEventListener('click', clickHandler, false);

}, false);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function setId(book) {
  book.id = entryId++;
}

function toggleRead(entry) {
  let text = '';
  let book = myLibrary[entry.id];
  book.hasRead = !book.hasRead;

  if (book.hasRead) {
    text = 'Read';
    // TODO get entry that matches book id
    entry.lastElementChild.classList.add('read');
  } else {
    text = 'Not Read';
    entry.lastElementChild.classList.remove('read');
  }

  return text;
}

// TODO DRY UP if possible - compare with toggleRead()
function initializeReadStatusButtons() {
  // check read status and update button colors accordingly
  myLibrary.forEach(function(book) {
    let entry = document.getElementById(`${book.id}`);
    if (book.hasRead) {
      // TODO get entry that matches book id
      entry.lastElementChild.classList.add('read');
    } else {
      entry.lastElementChild.classList.remove('read');
    }
  });
}
// ============== render functions ============================================
function render() {
  clearBookList();
  myLibrary.forEach( function(book, bookIndex) {                               // bookIndex not in use, but I'm keeping it here incase I need it
    const elements = createHtmlElementsForEntry('render');
    elements.entry.id = book.id;
    elements.entry.classList.add('entry');

    appendEntries(elements, 'render');
    addEntryText(elements, book, 'render');
  });
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
    elements.entryDescription.innerText = book.description;
  }

  if (context === 'search') {
    elements.entryDescription.innerText = book.description.substring(0, 100) + '...' || '[No Description Provided]';
  }

  elements.entryTitle.innerText = book.title;
  elements.entryAuthor.innerText = 'by ' + book.authors || '[No Author(s) Listed]';
  elements.entryDate.innerText = 'Published: ' + book.publishedDate || '[No Date Provided]';

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
  elements[property].appendChild(elements.entryDate);
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
    elements.img  = document.createElement('img');
    elements.searchResults = document.getElementById('search-results');
    elements.searchResultItem = document.createElement('div');
  }

  elements.entryTitle = document.createElement('h2');
  elements.entryAuthor = document.createElement('h3');
  elements.entryDate = document.createElement('p');
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
  }

  // Read and Delete Buttons
  if (elementClicked.classList.contains('read-btn')) {

    let entry = elementClicked.parentNode;
    elementClicked.innerText = toggleRead(entry);

  } else if (elementClicked.classList.contains('del-btn')) {
    let bookId = elementClicked.parentNode.id;
    let entryToRemove = document.getElementById(`${bookId}`);
    bookList.removeChild(entryToRemove);
    myLibrary.splice(bookId,1);
    // render();

  } else if (elementClicked.classList.contains('add-to-library-btn')) {
    // add book to library
    let elementClickedId = e.target.id;
    storeSelectedBook(elementClickedId);
    delete results[elementClickedId].searchId;
    toggleModal();
    togglePageOverlay();
    clearSearches();
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
        response.items.forEach(function(item, index) {
          let book = {};
          const elements = createHtmlElementsForEntry('search');
          elements.addToLibraryBtn.classList.add('add-to-library-btn');
          elements.addToLibraryBtn.innerText = 'Add to Library';
          elements.searchResultItem.classList.add('search-result-item');
          // elements.img.src = book.imgUrl || '';

          setBookSearchResult(book, item, index);

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
  book.title = item.volumeInfo.title || '';
  book.authors = item.volumeInfo.authors || '';
  book.publishedDate = item.volumeInfo.publishedDate  || '';
  book.description = item.volumeInfo.description  || '';
  book.categories = item.volumeInfo.categories  || '';
  results.push(book);
  // book.imgUrl = fixImgUrl(item.volumeInfo.imageLinks.thumbnail);
}

// Store the book selected by the user in the user's library
function storeSelectedBook(id) {
  // console.log('storing book'); // debug
  // console.log(results[id]); // debug
  setId(results[id]);
  addBookToLibrary(results[id]);
  clearInputs(); // TODO clear search box
  render();
}

function fixImgUrl(url){
  // change http to https
  let strArray = url.split(':')
  return strArray[0] + 's:' + strArray[1];

  // example result before fixing
  // http://books.google.com/books/content?id=j2uGDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
}
