const exactSearch = (docs, searchQuery) => {
  return docs.map((doc) => {
    const words = doc.text.split(' ');

    if (words.includes(searchQuery)) {
      return doc.id;
    }
  });
};

module.exports = exactSearch;
