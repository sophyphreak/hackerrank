const sockMerchant = (n, ar) => {
  const unpaired = new Set([]);
  let pairs = 0;
  ar.forEach(val => {
    if (unpaired.has(val)) {
      unpaired.delete(val);
      pairs++;
    } else {
      unpaired.add(val);
    }
  })
  return pairs;
}