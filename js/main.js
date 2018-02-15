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
let entryId = 4;

function Book(title, authors, publishedDate, description, categories, imgUrl, hasRead) {
  this.title = title;
  this.authors = authors || 'No author listed';
  this.publishedDate = publishedDate || 'No Date Listed';
  this.description = description;
  this.categories = categories;
  this.imgUrl = imgUrl;
  this.hasRead = hasRead;
}

function setId(book) {
  book.id = entryId++;  
}

function toggleRead(bookId) {
  let text = '';
  let book = myLibrary[bookId];
  console.log(book);
  book.hasRead = !book.hasRead;
  
  if (book.hasRead) {
    text = 'Read';
  } else {
    text = 'Not Read';
  }
  
  return text;
}

function addBookToLibrary(book) {
  console.log('adding book');
  myLibrary.push(book);
}

window.addEventListener('load', function() { 
    render();
    document.addEventListener('click', clickHandler, false);
    
}, false);

function clearSearches() {
  // TODO similar to clearing library
  results = []; // clear results from previous search
  clearInputs();
  const searchResults = document.getElementById('search-results');
  while (searchResults.hasChildNodes()) {
    searchResults.removeChild(searchResults.lastChild);
  }
}

function render() {
  clearBookList();
   
    myLibrary.forEach(function(book, bookIndex) {                               // bookIndex not in use, but I'm keeping it here incase I need it
      
      const elements = createHtmlElementsForEntry();
      elements.entry.id = book.id;
      elements.entry.classList.add('entry');
      
      appendEntries(elements);
      addEntryText(elements, book);
    });
  
}


// ============== render functions ============================================
function addEntryText(elements, book) {
  let readStatus;
  if (book.hasRead) {
    readStatus = 'Read';
  } else {
    readStatus = 'Not Read' 
  }
      
  elements.readBtn.innerText = readStatus;
  elements.entryTitle.innerText = book.title;
  elements.entryAuthor.innerText = 'by ' + book.authors;
  elements.entryDate.innerText = 'published: ' + book.publishedDate;
  elements.entryDescription.innerText = book.description;
}

function appendEntries(elements) {
  bookList.appendChild(elements.entry);
  elements.entry.appendChild(elements.entryTitle);
  elements.entry.appendChild(elements.entryAuthor);
  elements.entry.appendChild(elements.entryDate);
  elements.entry.appendChild(elements.entryDescription);
  elements.entry.appendChild(elements.delBtn);
  elements.entry.appendChild(elements.readBtn);
}

function createButton(className, innerText) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.innerText = innerText;
  return button;
}

function createHtmlElementsForEntry() {
      const delBtn = createButton('del-btn', '-');
      const readBtn = createButton('read-btn', '');

      return {
        entry : document.createElement('div'),
        entryTitle : document.createElement('h2'),
        entryAuthor : document.createElement('h3'), 
        entryDate : document.createElement('p'),
        entryDescription : document.createElement('p'),
        delBtn : delBtn,
        readBtn : readBtn
      }
}

// ============================================================================

function openSearchModal() {
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  // TODO clear search and results
}

// ============== clickHandler ================================================
function clickHandler(e) {
  let elementClicked = e.target;  
  
  switch(elementClicked.id) {
    case ('open-search-modal-btn') :
      openSearchModal();
      break;
    case ('close-modal-btn') :
      closeModal();
      clearSearches();
      break;
    case ('search-btn') :
      runSearch();
      clearSearches();
  }
  
  // Read and Delete Buttons
  if (elementClicked.classList.contains('read-btn')) {
                                                                  // TODO review this id process 
    let bookId = elementClicked.parentNode.id;
    elementClicked.innerText = toggleRead(bookId);
    
  } else if (elementClicked.classList.contains('del-btn')) {
    let bookId = elementClicked.parentNode.id;
    console.log(bookId);
    let entryToRemove = document.getElementById(`${bookId}`);
    bookList.removeChild(entryToRemove);
    myLibrary.splice(bookId,1);
    // render();
    
  } else if (elementClicked.classList.contains('add-btn')) {
    // add book to library
    let elementClickedId = e.target.id;
    storeSelectedBook(elementClickedId);
    // close modal
    closeModal();
    clearSearches();
  }
}

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


// TODO split up into multiple functions
function runSearch() {
  let search = $('#books').val();
    
    if (search === '') {
      // TODO
      console.log('Enter a book to search for');
    } else {
      $.get('https://www.googleapis.com/books/v1/volumes?q=' + search, function(response) {
        let book = {};
        
        response.items.forEach(function(item, index) {
          let addBtn = document.createElement('button');
          addBtn.classList.add('add-btn');
          addBtn.innerText = 'Add to Library';
          book.title = item.volumeInfo.title || '';
          book.authors = item.volumeInfo.authors || '';
          book.publishedDate = item.volumeInfo.publishedDate  || '';
          book.description = item.volumeInfo.description  || '';
          book.categories = item.volumeInfo.categories  || '';
          let img = document.createElement('img');
          book.imgUrl = fixImgUrl(item.volumeInfo.imageLinks.thumbnail);
          img.src = book.imgUrl || '';
          
          results.push(book);
          
          let searchResults = document.getElementById('search-results');
          let searchResultItem = document.createElement('div');
          searchResultItem.classList.add('search-result-item');  
          addBtn.id = index;
          searchResults.appendChild(searchResultItem);

          searchResultItem.innerText = `${book.title}
                                        by ${book.authors}
                                        Date Published: ${book.publishedDate}`;
                                        // TODO add unordered list for authors
                                        // TODO img not working
          searchResultItem.appendChild(addBtn);
        });
      });
        
    } 
}
    
// Store the book selected by the user in the user's library 
function storeSelectedBook(id) {
  console.log('storing book'); // debug
  console.log(results[id]); // debug
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