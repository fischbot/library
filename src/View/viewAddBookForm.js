function viewAddBookForm(id) {
  const formToView = id.includes('custom')
    ? 'custom-book-modal'
    : 'search-modal';
  const modal = document.getElementById(formToView);
  toggleModalView(modal);
}

function toggleModalView(modal) {
  modal.classList.contains('hidden')
    ? modal.classList.remove('hidden')
    : modal.classList.add('hidden');
}

export default viewAddBookForm;
