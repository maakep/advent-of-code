const fs = require('fs');
const test = process.argv[4] == 't';

module.exports = () => {
  let input = fs.readFileSync(test ? './dec03/input-test2' : './dec03/input', 'utf-8');
  input = input.replaceAll(/don't\(\).*?do\(\)/g, ''); // Manually changed the data to one line to avoid multiline logic

  const matches = [...input.matchAll(RegExp(/mul\((\d+),(\d+)\)/g))];

  let sum = 0;

  for (const match of matches) {
    const val = Number(match[1]) * Number(match[2]);
    sum += val;
  }

  return sum;
};
