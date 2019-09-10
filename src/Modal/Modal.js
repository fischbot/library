import View from '../View/View';
import './Modal.styles.scss';

class Modal extends View {
  constructor(modalType) {
    super();
    this.containerId = '';
    this.modalId = `${modalType}-modal`;
    this.contentContainer = this.createViewElement(
      'div',
      ['modal__content-container'],
      `modal__${modalType}-content`
    );
    this.render();
  }

  // remove the modal from the DOM
  remove() {
    this.containerId.parentNode.removeChild(this.containerId);
  }

  hide() {
    this.containerId.style.display = 'none';
  }

  createCloseBtn(parent) {
    const closeBtn = this.createViewElement(
      'button',
      ['js-modal__close-btn', 'close-btn'],
      '',
      'X'
    );
    parent.appendChild(closeBtn);
  }

  render() {
    const body = document.querySelector('body');

    this.containerId = this.createViewElement('div', ['modal'], this.modalId);

    body.appendChild(this.containerId);

    this.containerId.appendChild(this.contentContainer);

    this.createCloseBtn(this.contentContainer);
  }
}

export default Modal;
