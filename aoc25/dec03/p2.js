const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

function findHighestNumbers(line, digit, lastIndex) {
  const highestNumber = { value: -1, index: -1 };
  const allowedRange = line.slice(lastIndex + 1, digit * -1 || undefined);

  for (const number of allowedRange) {
    const { value, index } = number;

    if (value > highestNumber.value) {
      highestNumber.value = value;
      highestNumber.index = index;
    }
  }

  console.log(highestNumber.value);
  return highestNumber;
}

module.exports = () => {
  const jolts = [];

  for (const line of input) {
    const linex = line
      .split("")
      .map((x, i) => ({ value: Number.parseInt(x), index: i }));
    const battery = [];

    for (let i = 11; i >= 0; i--) {
      const lastBattery = battery[battery.length - 1];

      const val = findHighestNumbers(
        linex,
        i,
        lastBattery ? lastBattery.index : -1
      );
      battery.push(val);
    }

    const int = parseInt(`${battery.map((x) => x.value).join("")}`);
    jolts.push(int);
  }

  return jolts.reduce((a, b) => a + b, 0);
};
