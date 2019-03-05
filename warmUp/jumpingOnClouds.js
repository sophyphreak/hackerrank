const jumpingOnClouds = c => {
  let current = 0;
  let jumps = 0;
  while (current < c.length - 1) {
    if (current + 2 < c.length && c[current + 2] === 0) {
      current += 2;
      jumps++;
    } else {
      current++;
      jumps++;
    }
  }
  return jumps;
}