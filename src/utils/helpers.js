const lowerCase = (...txt) => txt.map(t => t.toLowerCase());

function generateId(title) {
  let length = 20;
  const id = [
    title
      .toLowerCase()
      .split(' ')
      .join('-'),
    '_'
  ];
  for (let i = 0; i < length; i++) {
    id.push(randomize());
  }
  return id.join('');
}

const randomize = num => Math.floor(Math.random() * 10);

export { lowerCase, generateId };
