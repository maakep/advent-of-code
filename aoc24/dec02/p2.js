const input = process.argv[4] == 't' ? require('./input-test') : require('./input');

// Coal
module.exports = () => {
  let last = undefined;
  let numOfSafe = 0;

  for (const report of input) {
    const asc = report[0] - report[1] < 0;

    last = report[0];

    let hasRemoved = false;

    const safe = report.every((x, i) => {
      if (i == 0) {
        return true;
      }

      const diff = last - x;

      if ((diff >= 0 && asc) || (diff <= 0 && !asc)) {
        if (!hasRemoved) {
          hasRemoved = true;
          return true;
        }

        console.log('Wrong direction', report);
        return false;
      }

      if (!(Math.abs(diff) >= 1 && Math.abs(diff) <= 3) && !hasRemoved) {
        console.log('big span', report);
        hasRemoved = true;
        return true;
      }

      last = x;
      return Math.abs(diff) >= 1 && Math.abs(diff) <= 3;
    });

    if (safe) {
      numOfSafe++;
    }
  }

  return numOfSafe;
};
