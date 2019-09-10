import './View.styles.scss';

class View {
  constructor(containerId) {
    this.containerId = document.getElementById(containerId);
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

  clearView(containerId) {
    while (containerId.hasChildNodes()) {
      containerId.removeChild(containerId.lastChild);
    }
  }

  emptyMsg(content) {
    const emptyMsg = this.createViewElement('p', [], 'empty-msg', content);
    this.containerId.appendChild(emptyMsg);
  }
}

export default View;
