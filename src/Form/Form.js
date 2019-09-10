import View from '../View/View';
import './Form.styles.scss';

class Form extends View {
  constructor(containerId) {
    super(containerId);
    this.elements = [];
    this.formClasses = [];
  }

  input(type, name, classes, id, placeholder, required, autofocus) {
    const i = this.createViewElement('input', classes, id);
    i.type = type;
    i.name = name;
    i.placeholder = placeholder;
    i.required = required;
    i.autofocus = autofocus;
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

  storeElement(element) {
    this.elements = [...this.elements, element];
  }

  error(text) {
    const e = this.createViewElement('p', ['form__error-msg'], '', text);
    this.containerId.appendChild(e);
    setTimeout(() => {
      e.remove();
    }, 2000);
  }

  render() {
    const form = this.createViewElement('form', this.formClasses);

    this.elements.map(element => form.appendChild(element));
    this.containerId.appendChild(form);

    // make sure input gets focus every time the form is rendered
    form.getElementsByTagName('input')[0].focus();
  }
}

export default Form;
