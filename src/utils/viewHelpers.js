function toggleModalView(id) {
  const modal = document.getElementById(id);
  modal.classList.contains('hidden')
    ? modal.classList.remove('hidden')
    : modal.classList.add('hidden');
}

export { toggleModalView };
