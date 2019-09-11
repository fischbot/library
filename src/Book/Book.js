class Book {
  constructor(
    title,
    authors,
    publishedDate,
    description,
    imgUrl,
    pages,
    hasRead
  ) {
    let published = '';

    if (publishedDate) {
      published = String(publishedDate).includes('-')
        ? new Date(publishedDate).getFullYear()
        : publishedDate;
    }

    this.title = title || '[unavailable]';
    this.authors = authors || '[unavailable]';
    this.publishedDate = published || '[unavailable]';
    this.description = description || '[unavailable]';
    this.imgUrl = imgUrl || './img/none.jpg';
    this.pages = pages || '[unavailable]';
    this.id = this.createId(`${title} ${publishedDate}`);
    this.hasRead = hasRead || false;
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
