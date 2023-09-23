const sortSearchResult = (searchResArray) => {
  const filtered = searchResArray.filter(res => res !== undefined);
  const sorted = filtered.sort((a, b) => (b[1] - a[1]));
  const mapped = sorted.map(([key]) => { return key });
  return mapped;
}

module.exports = sortSearchResult;