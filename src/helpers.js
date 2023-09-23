const WORD_REGEXP = /([a-zA-Z]+)|([0-9]+)/g;
const EXTRA_SYMBOLS_REGEXP = /[^a-zA-Z0-9 ]+/g;

export const getRidOfSymbols = (text) => {
  const text1 = text.replace(/\n/g, ' ');
  return text1.replace(EXTRA_SYMBOLS_REGEXP, '');
};

export const getUnique = (array) => Array.from(new Set(array));

export const getInvertedIndex = (docs) => {
  const unitedText = docs.reduce((acc, doc) => `${acc} ${doc.text}`, '');
  const allWordsArray = unitedText.match(WORD_REGEXP);
  const uniqueWordsArray = getUnique(allWordsArray);

  const docsTextArrays = docs.map((doc) => ({ ...doc, text: doc.text.match(WORD_REGEXP) }));

  return uniqueWordsArray.reduce((acc, word) => ({
    ...acc,
    [word]: docsTextArrays.reduce((acc1, doc) => (
      doc.text.includes(word) ? [...acc1, doc.id] : acc1
    ), []),
  }), {});
};

export const calculateTF = (docText, targetWordRegExp) => {
  const targetWordsInText = (docText.match(targetWordRegExp) || []).length;
  const wordsInText = docText.match(WORD_REGEXP).length;
  return targetWordsInText / wordsInText;
};

export const calculateIDF = (docsNumber, invertedIndex, targetWord) => {
  let currentIDF = docsNumber / (invertedIndex[targetWord] ? invertedIndex[targetWord].length : 0);
  if (!Number.isFinite(currentIDF)) {
    currentIDF = 0;
  }
  return currentIDF;
};

export const getTF = (TFs, targetWord, docId) => (
  TFs[targetWord].find((value) => Object.keys(value)[0] === docId)[docId]
);

export const findSumTFIDFbyDocId = (TFIDF, docId) => (
  Object.values(TFIDF).reduce((acc, targetWordDocs) => (
    acc + targetWordDocs.find((value) => Object.keys(value)[0] === docId)[docId]
  ), 0)
);

