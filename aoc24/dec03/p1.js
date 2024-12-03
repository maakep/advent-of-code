const fs = require('fs');
const test = process.argv[4] == 't';

module.exports = () => {
  const input = fs.readFileSync(test ? './dec03/input-test' : './dec03/input', 'utf-8');
  const matches = [...input.matchAll(RegExp(/mul\((\d+),(\d+)\)/g))];

  let sum = 0;

  for (const match of matches) {
    const val = Number(match[1]) * Number(match[2]);
    sum += val;
  }

  return sum;
};
