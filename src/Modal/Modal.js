import View from '../View/View';
import './Modal.styles.css';

class Modal extends View {
  constructor(modalType) {
    super();
    this.parent = '';
    this.modalId = `${modalType}-modal`;
    this.contentParent = this.createViewElement(
      'div',
      [],
      'modal-content-container'
    );
    this.render();
  }

  // remove the modal from the DOM
  remove() {
    this.parent.parentNode.removeChild(this.parent);
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

    this.parent = this.createViewElement('div', ['modal'], this.modalId);

    body.appendChild(this.parent);

    this.parent.appendChild(this.contentParent);

    this.createCloseBtn(this.contentParent);
  }
}

export default Modal;
