const input = process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const repeatingNumbersRegex = /^(\d+)\1$/
  const repeats = [];

  for ({ from, to } of input) {
    for (let i = from; i <= to; i++) {
      if (repeatingNumbersRegex.test(i.toString())) {
        repeats.push(i);
      }
    }
  }

  return repeats.reduce((a, b) => a + b, 0);
};

