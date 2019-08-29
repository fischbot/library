class Book {
  constructor(
    title,
    authors,
    publishedDate,
    description,
    imgUrl,
    pageCount,
    id,
    hasRead
  ) {
    this.title = title;
    this.authors = authors;
    this.publishedDate = publishedDate;
    this.description = description;
    this.imgUrl = imgUrl;
    this.pageCount = pageCount;
    this.id = this.createId(title);
    this.hasRead = hasRead;
  }

  createId(bookTitle) {
    return bookTitle
      .toLowerCase()
      .split(' ')
      .join('-');
  }

  changeReadStatus(book) {
    return !book.hasRead;
  }
}

export default Book;
