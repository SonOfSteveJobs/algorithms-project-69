const matchCounter = require("../src/lib/matchCounter");

test('Match-counter', () => {
  const string = "Don't shoot shoot shoot that thing at me."
  const words = string.split(/\W+/);
  const result = matchCounter(words, 'shoot');

  expect(result).toBe(3);
})