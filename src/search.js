const {
  findSumTFIDFbyDocId,
  getTF,
  calculateIDF,
  calculateTF,
  getInvertedIndex,
  getRidOfSymbols
} = require("./helpers");



const WORD_REGEXP = /([a-zA-Z]+)|([0-9]+)/g;

const search = (docs) => {
  const normalizedDocs = docs.map((doc) => ({
    ...doc,
    text: getRidOfSymbols(doc.text.toLowerCase()),
  }));
  const invertedIndex = getInvertedIndex(normalizedDocs);

  return {
    search(target) {
      if (!target) {
        return [];
      }
      const normalizedTarget = getRidOfSymbols(target);
      const normalizedTargetArray = normalizedTarget.match(WORD_REGEXP);

      const TFs = normalizedTargetArray.reduce((acc, targetWord) => {
        const regExp = new RegExp(`(?<![a-zA-Z])${targetWord}(?![a-zA-Z])`, 'g');
        return {
          ...acc,
          [targetWord]: normalizedDocs.reduce((acc1, doc) => (
            [...acc1, { [doc.id]: calculateTF(doc.text, regExp) }]
          ), []),
        };
      }, {});

      const IDF = normalizedTargetArray.reduce((acc, targetWord) => {
        const currentIDF = calculateIDF(docs.length, invertedIndex, targetWord);
        return {
          ...acc,
          [targetWord]: Math.log(1 + currentIDF),
        };
      }, {});

      const TFIDF = normalizedTargetArray.reduce((acc, targetWord) => ({
        ...acc,
        [targetWord]: normalizedDocs.reduce((acc1, doc) => (
          [...acc1, { [doc.id]: getTF(TFs, targetWord, doc.id) * IDF[targetWord] }]
        ), []),
      }), {});

      const res = normalizedDocs.reduce((acc, doc) => (
        [...acc, [doc.id, findSumTFIDFbyDocId(TFIDF, doc.id)]]
      ), []);

      return res
        .filter((item) => item[1] > 0)
        .sort((a, b) => b[1] - a[1])
        .map((item) => item[0]);
    },
  };
};

module.exports = search;