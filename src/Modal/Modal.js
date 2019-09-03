import View from '../View/View';
import './Modal.styles.css';

class Modal extends View {
  constructor(id) {
    super();
    this.parent = '';
    this.modalType = id;
    this.render();
  }

  remove() {
    this.parent.parentNode.removeChild(this.parent);
  }

  renderModalForm() {
    // TODO
  }

  renderModalSearch() {
    // TODO
  }

  createCloseBtn(parent) {
    const closeBtn = this.createViewElement(
      'button',
      ['close-modal-btn'],
      '',
      'X'
    );
    parent.appendChild(closeBtn);
  }

  render() {
    const body = document.querySelector('body');
    this.parent = this.createViewElement(
      'div',
      ['modal'],
      `${this.modalType}-modal`
    );
    body.appendChild(this.parent);
    this.createCloseBtn(this.parent);
  }
}

export default Modal;
