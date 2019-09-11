import Book from '../Book/Book';

const sampleData = [
  {
    title: 'The Hobbit',
    authors: ['J.R.R. Tolkien'],
    publishedDate: '1982',
    description: `
      Chronicles the adventures of the inhabitants of Middle-earth and Bilbo Baggins, the hobbit who brought home to The Shire the One Ring of Power
    `,
    imgUrl:
      'https://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    pages: 300,
    hasRead: true
  },
  {
    title: 'The Fellowship of the Ring',
    authors: ['J.R.R. Tolkien'],
    publishedDate: '',
    description: `
      [unavailable]
    `,
    imgUrl: '',
    pages: 492,
    hasRead: false
  },
  {
    title: 'A Game of Thrones 4-Book Bundle',
    authors: ['George R. R. Martin'],
    publishedDate: '2011-03-22',
    description: `
     George R. R. Martin's A Song of Ice and Fire series has become, in many ways, the gold standard for modern epic fantasy. Martin—dubbed the \"American Tolkien\" by Time magazine—has created a world that is as rich and vital as any piece of historical fiction, set in an age of knights and chivalry and filled with a plethora of fascinating, multidimensional characters that you love, hate to love, or love to hate as they struggle for control of a divided kingdom. It is this very vitality that has led it to be adapted as the HBO miniseries “Game of Thrones.” This bundle includes the following novels: A GAME OF THRONES A CLASH OF KINGS A STORM OF SWORDS A FEAST FOR CROWS
    `,
    imgUrl:
      'https://books.google.com/books/content?id=mA8A4BYWB1IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    pages: 3264,
    hasRead: false
  }
];

export default sampleData;
