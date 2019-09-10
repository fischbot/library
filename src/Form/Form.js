import View from '../View/View';
import './Form.styles.scss';

class Form extends View {
  constructor(containerId) {
    super(containerId);
    this.elements = [];
    this.formClasses = [];
  }

  input(type, name, classes, id, placeholder, required) {
    const i = this.createViewElement('input', classes, id);
    i.type = type;
    i.name = name;
    i.placeholder = placeholder;
    i.required = required;
    return i;
  }

  button(classes, id, text) {
    const b = this.createViewElement('button', classes, id, text);
    return b;
  }

  label(forName, classes, id, text) {
    const l = this.createViewElement('label', classes, id, text);
    l.setAttribute('for', forName);
    return l;
  }

  textArea(name, classes, id, rows, cols) {}

  storeElement(element) {
    this.elements = [...this.elements, element];
  }

  render() {
    const form = this.createViewElement('form', this.formClasses);

    this.elements.map(element => form.appendChild(element));
    this.containerId.appendChild(form);
  }
}

export default Form;
