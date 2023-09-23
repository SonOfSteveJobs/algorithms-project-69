import search from "../src/search";

test('1', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  const searchEngine = search(docs);

  expect(searchEngine.search('shoot')).toStrictEqual(['doc2', 'doc1']);
});

test('2', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const docs = [doc1];
  const searchEngine = search(docs);

  expect(searchEngine.search('pint!')).toStrictEqual([]);
});

test('3', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  const searchEngine = search(docs);

  expect(searchEngine.search('shoot')).toStrictEqual(['doc2', 'doc1']);
});

test('4', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  const searchEngine = search(docs);

  expect(searchEngine.search('shoot at me')).toStrictEqual(['doc2', 'doc1']);
});

test('5', () => {
  const doc1 = { id: 'doc1', text: 'some text' };
  const doc2 = { id: 'doc2', text: 'some text too a' };
  const doc3 = { id: 'doc3', text: 'a a a a a' };
  const docs = [doc1, doc2, doc3];
  const searchEngine = search(docs);

  expect(searchEngine.search('some a text')).toStrictEqual(['doc3', 'doc1', 'doc2']);
});