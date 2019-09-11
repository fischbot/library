import sampleData from '../assets/sample_data';

function checkStorage() {
  if (storageAvailable('localStorage')) {
    if (!window.localStorage.library) {
      // if the library is empty, add sample data
      // this is so the user can see how the app is supposed to look
      return sampleData;
    } else {
      // get the stored data
      return retrieveFromLocalStorage();
    }
  } else {
    alert(
      'Sorry, localStorage is not available with your browser. ' +
        "You won't be able to save your library. :("
    );
    return sampleData;
  }
}

function saveToLocalStorage(books) {
  let lib = JSON.stringify(books);
  window.localStorage.setItem('library', lib);
}

function retrieveFromLocalStorage() {
  let data = window.localStorage.getItem('library');
  let localData = JSON.parse(data);
  console.log(localData);
  return localData;
}

function storageAvailable(type) {
  try {
    let storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there"s something already stored
      storage.length !== 0
    );
  }
}

function updateLocalStorage(books) {
  // clear localStorage
  window.localStorage.clear();
  // repopulate if there's something in the library
  if (books.length !== 0) {
    saveToLocalStorage(books);
  }
}

export { checkStorage, updateLocalStorage };
