const input = process.argv[4] == 't' ? require('./input-test') : require('./input');

const maxX = input[0].length - 1;
const maxY = input.length - 1;

const word = ['X', 'M', 'A', 'S'];

const upLeft = [-1, -1];
const up = [-1, 0];
const upRight = [-1, 1];

const left = [0, -1];
const right = [0, 1];

const botLeft = [1, -1];
const bot = [1, 0];
const botRight = [1, 1];

let xmasses = 0;

module.exports = () => {
  for (const ri in input) {
    for (const li in input[ri]) {
      const letter = input[ri][li];

      if (letter == 'X') {
        for (const dir of [upLeft, up, upRight, left, right, botLeft, bot, botRight]) {
          traverse(Number(ri), Number(li), dir, 1);
        }
      }
    }
  }

  return xmasses;
};

function traverse(y, x, dir, wordIndex) {
  const letter = coordIfInBounds(y + dir[0], x + dir[1]);
  if (letter !== word[wordIndex]) return;

  if (letter == 'S') {
    xmasses++;
    return;
  }

  return traverse(y + dir[0], x + dir[1], dir, ++wordIndex);
}

function coordIfInBounds(y, x) {
  if (y > maxY || y < 0) return '.';
  if (x > maxX || x < 0) return '.';

  return input[y][x];
}
