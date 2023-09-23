const sortSearchResult = (searchResArray) => {
  const filtered = searchResArray.filter(res => res !== undefined);
  console.log('filtered', filtered)
  const sorted = filtered.sort((a, b) => (b[1] - a[1]));
  console.log('Sorted', sorted)
  const mapped = sorted.map(([key]) => { return key });
  return mapped;
}

const arr = [['doc1', 1], ['doc2', 3]]
console.log(sortSearchResult(arr))

