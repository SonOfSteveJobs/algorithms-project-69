const matchCounter = (words, searchQuery) => {
  const filtered = words.filter((word) => word === searchQuery);
  if (filtered.length !== 0) {
    return filtered.length;
  }
}

module.exports = matchCounter;