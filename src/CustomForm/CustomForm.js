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
        'custom-form__title',
        'Add Title',
        true,
        true
      ),
      this.addInputEntry(
        'authors',
        '',
        'Author(s)',
        'text',
        'custom-form__author',
        'Separate multiple authors with comma',
        true
      ),
      this.addInputEntry(
        'pages',
        '',
        'Page Count',
        'number',
        'custom-form__pages',
        'Add Page Count',
        false
      ),
      this.addInputEntry(
        'publishedDate',
        '',
        'Year Published',
        'number',
        'custom-form__publish-date',
        'Add Year Published',
        false
      ),
      this.addInputEntry(
        'image',
        '',
        'Image URL',
        'text',
        'custom-form__image',
        'Add Custom Image URL',
        false
      ),
      this.addInputEntry(
        'description',
        '',
        'Description',
        'text',
        'custom-form__description',
        'Add Short Description',
        false
      )
    ];
    sections.map(section => this.createSection(section));
    this.inputs = sections.map((section, i) => section[1]);

    this.storeElement(
      this.button(['form__submit-btn'], 'custom-submit-btn', 'Submit')
    );
  }

  addInputEntry(
    forName,
    labelId,
    labelText,
    inputType,
    inputId,
    inputPlaceholder,
    InputRequired,
    InputAutofocus
  ) {
    return [
      this.label(forName, ['custom-label'], labelId, labelText),
      this.input(
        inputType,
        forName,
        ['form__input', 'custom-form__field'],
        inputId,
        inputPlaceholder,
        InputRequired,
        InputAutofocus
      )
    ];
  }

  createSection(args) {
    const div = this.createViewElement('div', ['custom-form__section']);
    args.map(e => div.appendChild(e));
    this.storeElement(div);
  }

  handleSubmit(books) {
    const info = {};

    // set up input values to match Book format
    this.inputs.map(input => {
      let { name, value } = input;
      if (name === 'authors') {
        value = value.split(',');
      }
      return (info[name] = value);
    });

    // destructure info
    const {
      title,
      authors,
      publishedDate,
      description,
      imgUrl,
      pageCount
    } = info;

    // these fields are required
    if (!title && authors.length === 0) return 'error';

    let published = publishedDate ? '1-1-' + publishedDate : '';
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
