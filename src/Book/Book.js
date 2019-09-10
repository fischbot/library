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
    this.title = title || '[unavailable]';
    this.authors = authors || '[unavailable]';
    this.publishedDate = publishedDate || '[unavailable]';
    this.description = description || '[unavailable]';
    this.imgUrl = imgUrl || './img/none.jpg';
    this.pages = pages || '[unavailable]';
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
