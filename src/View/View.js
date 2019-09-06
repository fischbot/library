import './View.styles.css';

class View {
  constructor(parentId) {
    this.parent = document.getElementById(parentId);
  }

  createViewElement(type, classes, id, content) {
    let elem = document.createElement(type);
    if (classes) classes.map(className => elem.classList.add(className));
    if (id) elem.id = id;
    if (content) {
      type === 'img' ? (elem.src = content) : (elem.innerText = content);
    }
    return elem;
  }

  getElement(id) {
    return document.getElementById(id);
  }

  clearView(parent) {
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.lastChild);
    }
  }
}

export default View;
