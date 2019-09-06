import View from '../View/View';

class Form extends View {
  constructor(parentId) {
    super(parentId);
    this.elements = [];
  }

  input(type, name, classes, id, placeholder, required) {
    const i = this.createViewElement('input', classes, id);
    i.type = type;
    i.name = name;
    i.placeholder = placeholder;
    i.required = required;

    this.storeElement(i);
  }

  button(classes, id, text) {
    const b = this.createViewElement('button', classes, id, text);
    this.storeElement(b);
  }

  label(forName, classes, id, text) {
    const l = this.createViewElement('label', classes, id, text);
    l.for = forName; // ?? not showing up, but shows in debugger
    this.storeElement(l);
  }

  textArea(name, classes, id, rows, cols) {}

  storeElement(element) {
    this.elements = [...this.elements, element];
  }

  render() {
    const form = this.createViewElement('form');
    this.elements.map(element => form.appendChild(element));
    this.parent.appendChild(form);
  }
}

export default Form;
