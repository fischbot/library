/* global $ */

'use strict'
var myLibrary = [
  {
    title : 'The Hobbit',
    authors : 'J.R.R. Tolkien',
    publishedDate : '1966',
    description : 'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.'
  },
  {
    title : 'The Hobbit',
    authors : 'J.R.R. Tolkien',
    publishedDate : '1966',
    description : 'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.'
  },
  {
    title : 'The Hobbit',
    authors : 'J.R.R. Tolkien',
    publishedDate : '1966',
    description : 'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.'
  },
  {
    title : 'The Hobbit',
    authors : 'J.R.R. Tolkien',
    publishedDate : '1966',
    description : 'Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.'
  },
  
];
var results = [];
const addBookBtn = document.getElementById('add-book-btn');
const addBookForm = document.getElementById('add-book-form');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const bookList = document.getElementById('book-list');
let entryId = 0;

function Book(title, authors, publishedDate, description, categories, imgUrl, hasRead) {
  this.title = title;
  this.authors = authors || 'No author listed';
  this.publishedDate = publishedDate || 'No Date Listed';
  this.description = description;
  this.categories = categories;
  this.imgUrl = imgUrl;
  this.hasRead = hasRead;
}

function setId() {
  return entryId++;  
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

// function toggleFormBtn() {
//   // toggle form hidden/visible
//   // change text from 'Add Book' to 'Hide Add Book'
//   if (addBookForm.classList.contains('hidden')) {
//     addBookForm.classList.remove('hidden');
//     addBookBtn.innerText = 'Hide Form';
//     addBookBtn.style.background = '#B62C3B';
//   } else {
//     addBookForm.classList.add('hidden');
//     addBookBtn.innerText = 'Add Book';
//     addBookBtn.style.background = '#1DBDBF';
//   }
// }

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
  myLibrary.forEach(function(book, bookIndex) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const p_desc = document.createElement('p');
    
    div.classList.add('entry');
    div.id = bookIndex;
    bookList.appendChild(div);
    div.appendChild(h2);
    h2.innerText = book.title;
    div.appendChild(h3);
    h3.innerText = 'by ' + book.authors;
    div.appendChild(p);
    p.innerText = 'published: ' + book.publishedDate;
    div.appendChild(p_desc);
    p_desc.innerText = book.description;
    // TODO fix
    // This is a temporary way of getting read/ not read
    let readStatus;
    if (book.hasRead) {
      readStatus = 'Read';
    } else {
      readStatus = 'Not Read'
    }
    
    const delBtn = createButton('del-btn', '');
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-minus');
    delBtn.appendChild(i);
    const readBtn = createButton('read-btn', readStatus);
    div.appendChild(delBtn);
    div.appendChild(readBtn);
    
  });
}

function createButton(className, innerText) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.innerText = innerText;
  return button;
}

function openSearchModal() {
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  // TODO clear search and results
}

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
    case ('close-add-book-form') :
      addBookForm.classList.add('hidden');
      break;
    case ('submit-btn') :
      console.log('submitting book info...');
      submitBook();
      break;
    case ('search-btn') :
      runSearch();
      clearSearches();
  }
  
  // Read and Delete Buttons
  if (elementClicked.classList.contains('read-btn')) {
    // TODO get parent of button
    let bookId = elementClicked.parentNode.id;
    elementClicked.innerText = toggleRead(bookId);
  } else if (elementClicked.classList.contains('del-btn')) {
    let bookId = elementClicked.parentNode.id;
    let entryToRemove = document.getElementById(`${bookId}`);
    bookList.removeChild(entryToRemove);
    myLibrary.splice(bookId,1);
    render();
  } else if (elementClicked.classList.contains('add-btn')) {
    // add book to library
    let elementClickedId = e.target.id;
    storeSelectedBook(elementClickedId);
    // close modal
    closeModal();
    clearSearches();
  }
}

function submitBook() {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  
  // if title is not entered don't allow submission
  if (title === '') {
    return;
  } 
  const book = {
    title : title,
    author : author,
    pages : pages
    // hasRead : document.getElementById('hasRead').value
  };
  addBookToLibrary(book);
  clearInputs();
  render();
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