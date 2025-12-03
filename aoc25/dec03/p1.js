const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const jolts = [];
  for (const line of input) {
    const highestNumbers = {
      first: { value: -1, index: -1 },
      second: { value: -1, index: -1 },
    };

    for (const numberIndex in line.slice(0, -1)) {
      const number = parseInt(line[numberIndex]);

      if (number > highestNumbers.first.value) {
        highestNumbers.first.value = Number.parseInt(number);
        highestNumbers.first.index = Number.parseInt(numberIndex);
      }
    }

    const remainingLine = line.slice(highestNumbers.first.index + 1);
    for (const numberIndex in remainingLine) {
      const number = parseInt(remainingLine[numberIndex]);

      if (number > highestNumbers.second.value) {
        highestNumbers.second.value = Number.parseInt(number);
        highestNumbers.second.index = Number.parseInt(numberIndex);
      }
    }

    const int = parseInt(
      `${highestNumbers.first.value}${highestNumbers.second.value}`
    );
    jolts.push(int);
  }

  return jolts.reduce((a, b) => a + b, 0);
};
