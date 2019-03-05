const countingValleys = (n, s) => {
  let valleys = 0;
  let altitude = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === 'U') {
      altitude++;
      if (altitude === 0) {
        valleys++;
      }
    }
    if (s[index] === 'D') {
      altitude--;
    }
  }
  return valleys;
};