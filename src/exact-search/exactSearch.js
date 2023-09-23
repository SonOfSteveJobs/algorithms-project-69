const exactSearch = (docs, searchQuery) => {
  const regex = /\w+/g;
  const termWord = searchQuery.match(regex)[0];

  return docs.map((doc) => {
    const words = doc.text.split(/\W+/);
    console.log(words)

    if (words.includes(termWord)) {
      return doc.id;
    }
  });
};


module.exports = exactSearch;
