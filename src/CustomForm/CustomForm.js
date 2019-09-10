import Form from '../Form/Form';
import Book from '../Book/Book';
import './CustomForm.styles.scss';

class CustomForm extends Form {
  constructor(parentId) {
    super(parentId);
    this.inputs = [];
    this.init();
    this.formClasses = ['custom-form'];
  }

  init() {
    const sections = [
      this.addInputEntry(
        'title',
        '',
        'Title',
        'text',
        'add-custom-title',
        'Add Title',
        true
      ),
      this.addInputEntry(
        'author',
        '',
        'Author(s)',
        'text',
        'add-custom-author',
        'Add Author (if multiple, separate with a comma)',
        true
      ),
      this.addInputEntry(
        'pages',
        '',
        'Page Count',
        'number',
        'add-custom-pages',
        'Add Page Count',
        false
      ),
      this.addInputEntry(
        'publishedDate',
        '',
        'Year Published',
        'date',
        'add-custom-publish-date',
        'Add Year Published',
        false
      ),
      this.addInputEntry(
        'image',
        '',
        'Image URL',
        'text',
        'add-custom-image',
        'Add Custom Image URL',
        false
      ),
      this.addInputEntry(
        'description',
        '',
        'Description',
        'text',
        'add-custom-description',
        'Add Short Description',
        false
      )
    ];
    sections.map(section => this.createSection(section));
    this.inputs = sections.map((section, i) => section[1]);

    this.storeElement(this.button([], 'custom-submit-btn', 'Submit'));
  }

  addInputEntry(
    forName,
    labelId,
    labelText,
    inputType,
    inputId,
    inputPlaceholder,
    InputRequired
  ) {
    return [
      this.label(forName, ['custom-label'], labelId, labelText),
      this.input(
        inputType,
        forName,
        ['custom-field'],
        inputId,
        inputPlaceholder,
        InputRequired
      )
    ];
  }

  createSection(args) {
    const div = this.createViewElement('div', ['custom-section']);
    args.map(e => div.appendChild(e));
    this.storeElement(div);
  }

  handleSubmit(books) {
    const info = {};
    this.inputs.map(input => {
      let { name, value } = input;
      info[name] = value;
    });
    const {
      title,
      authors,
      publishedDate,
      description,
      imgUrl,
      pageCount
    } = info;
    return new Book(
      title,
      authors,
      publishedDate,
      description,
      imgUrl,
      pageCount
    );
  }
}

export default CustomForm;
