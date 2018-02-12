'use strict'

let myLibrary = [
  {
    title : 'The Hobbit', 
    author : 'J.R.R. Tolkien', 
    pages : 300, 
    hasRead : true
  },
  {
    title : 'The Fellowship of the Ring', 
    author : 'J.R.R. Tolkien', 
    pages : 432, 
    hasRead : false
  },
  {
    title : 'The Two Towers', 
    author : 'J.R.R. Tolkien', 
    pages : 352,
    hasRead : false
  },
  {
    title : 'The Return of the King', 
    author : 'J.R.R. Tolkien', 
    pages : 432, 
    hasRead : false
  }
];
const addBookBtn = document.getElementById('add-book-btn');
const addBookForm = document.getElementById('add-book-form');
const bookList = document.getElementById('book-list');

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
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
  myLibrary.push(book);
}

window.addEventListener('load', function() { 
    render();
    document.addEventListener('click', clickHandler, false);
    
}, false);

function render() {
  clearBookList();
  myLibrary.forEach(function(book, bookIndex) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    div.classList.add('entry');
    div.id = bookIndex;
    bookList.appendChild(div);
    div.appendChild(h2);
    h2.innerText = book.title;
    div.appendChild(h3);
    h3.innerText = 'by ' + book.author;
    div.appendChild(p);
    p.innerText = book.pages + ' pages';
    // TODO fix
    // This is a temporary way of getting read/ not read
    let readStatus;
    if (book.hasRead) {
      readStatus = 'Read';
    } else {
      readStatus = 'Not Read'
    }
    
    const readBtn = createButton('read-btn', readStatus);
    const delBtn = createButton('del-btn', 'Delete');
    readBtn.classList.add('btn-secondary');
    delBtn.classList.add('btn-danger');
    div.appendChild(readBtn);
    div.appendChild(delBtn);
  });
}

function createButton(className, innerText) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.classList.add('btn');
  button.innerText = innerText;
  return button;
}

function clickHandler(e) {
  let elementClicked = e.target;  

  switch(elementClicked.id) {
    case ('add-book-btn') :
      addBookForm.classList.remove('hidden');
      break;
    case ('close-add-book-form') :
      addBookForm.classList.add('hidden');
      break;
    case ('submit-btn') :
      console.log('submitting book info...');
      submitBook();
      clearInputs();
      render();
      break;
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
  }
}

function submitBook() {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  
  if (title === '' || author === '' || pages === '') {
    return;
  } 
  const book = {
    title : title,
    author : author,
    pages : pages
    // hasRead : document.getElementById('hasRead').value
  };
  addBookToLibrary(book);
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
