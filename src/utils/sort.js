import { loweCase } from './helpers';

const sort = {};

sort.asc = {
  title: true,
  pageCount: true,
  authors: true,
  id: true,
  hasRead: true
};

sort.strings = (type, books) => {
  const sorted = [...books].sort((a, b) => {
    const values =
      type === 'authors'
        ? lowerCase(a[type][0], b[type][0])
        : [a[type].toLowerCase(), b[type].toLowerCase()];

    return compareStrings(values[0], values[1], type);
  });

  sort.updateSortOrder(type);

  return sorted;
};

sort.updateSortOrder = type => (sort.asc[type] = !sort.asc[type]);

const compareStrings = (a, b, type) =>
  sort.asc[type] ? stringSort(a, b) : stringSort(b, a);

const stringSort = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

const numberSort = (a, b) => a - b;

export default sort;
