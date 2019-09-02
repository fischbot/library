class Book {
  constructor(
    title,
    authors,
    publishedDate,
    description,
    imgUrl,
    pages,
    id,
    hasRead
  ) {
    this.title = title;
    this.authors = authors;
    this.publishedDate = publishedDate;
    this.description = description;
    this.imgUrl = imgUrl;
    this.pages = pages;
    this.id = this.createId(`${title} ${publishedDate}`);
    this.hasRead = hasRead;
  }

  createId(bookTitle) {
    return bookTitle
      .toLowerCase()
      .split(' ')
      .join('-');
  }

  toggleReadStatus(book) {
    return !book.hasRead;
  }
}

export default Book;
