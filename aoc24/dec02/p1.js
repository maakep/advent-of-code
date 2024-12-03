const input = process.argv[4] == 't' ? require('./input-test') : require('./input');

module.exports = () => {
  let last = undefined;
  let numOfSafe = 0;

  for (const report of input) {
    const asc = report[0] - report[1] < 0;

    last = report[0];

    const safe = report.every((x, i) => {
      if (i == 0) return true;

      const diff = last - x;

      if ((diff >= 0 && asc) || (diff <= 0 && !asc)) {
        console.log('Wrong direction');
        console.log(report);
        return false;
      }
      last = x;

      if (!(Math.abs(diff) >= 1 && Math.abs(diff) <= 3)) {
        console.log('big jump');
        console.log(report);
      }
      return Math.abs(diff) >= 1 && Math.abs(diff) <= 3;
    });

    if (safe) {
      numOfSafe++;
    }
  }

  return numOfSafe;
};
