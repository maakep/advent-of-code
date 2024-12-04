const input = process.argv[4] == 't' ? require('./input-test') : require('./input');

const maxX = input[0].length - 1;
const maxY = input.length - 1;

const upLeft = [-1, -1];
const upRight = [-1, 1];

const botLeft = [1, -1];
const botRight = [1, 1];

let xMasses = 0;

module.exports = () => {
  for (let ri in input) {
    for (let li in input[ri]) {
      li = Number(li);
      ri = Number(ri);

      const letter = input[ri][li];

      if (letter == 'A') {
        const _upLeft = coordIfInBounds(ri + upLeft[0], li + upLeft[1]);
        const _botRight = coordIfInBounds(ri + botRight[0], li + botRight[1]);

        const _upRight = coordIfInBounds(ri + upRight[0], li + upRight[1]);
        const _botLeft = coordIfInBounds(ri + botLeft[0], li + botLeft[1]);

        const valid1 = [_upLeft, _botRight].sort().join('') == 'MS';
        const valid2 = [_upRight, _botLeft].sort().join('') == 'MS';

        if (valid1 && valid2) {
          xMasses++;
        }
      }
    }
  }

  return xMasses;
};

function coordIfInBounds(y, x) {
  if (y > maxY || y < 0) return '.';
  if (x > maxX || x < 0) return '.';

  return input[y][x];
}
