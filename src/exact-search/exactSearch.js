const matchCounter = require("../lib/matchCounter");
const sortSearchResult = require("../lib/sortSearchResult");

const exactSearch = (docs, searchQuery) => {
  const regex = /\w+/g;
  const termWord = searchQuery.match(regex)[0];

  const resultWithCount = docs.map((doc) => {
    const words = doc.text.split(/\W+/);

    if (words.includes(termWord)) {
      const matchCount = matchCounter(words, termWord);
      return [doc.id, matchCount];
    }
  });
  return sortSearchResult(resultWithCount);
};


module.exports = exactSearch;
