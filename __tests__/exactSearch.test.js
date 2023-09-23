const exactSearch = require('../src/exact-search/exactSearch');

test('Exact-search', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];

  const result = exactSearch(docs, 'shoot');

  expect(result).toEqual(['doc2', 'doc1'])
});

test('Empty-search', () => {
  const result = exactSearch([], 'shoot');

  expect(result).toEqual([])
});

test('Pint!-search', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const docs = [doc1];

  const result = exactSearch(docs, 'pint!');

  expect(result).toEqual(['doc1'])
});

test('Pint-search', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const docs = [doc1];

  const result = exactSearch(docs, 'pint');

  expect(result).toEqual(['doc1']);
});