const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const liftables = [];

  let foundLiftables = true;

  while (foundLiftables) {
    foundLiftables = false;

    for (const line in input) {
      for (const charIndex in input[line]) {
        if (input[line][charIndex] === "@") {
          const [x, y] = [Number.parseInt(charIndex), Number.parseInt(line)];
          const canLift = evaluateCoordinate(x, y);
          if (canLift) {
            foundLiftables = true;
            liftables.push({ x, y });
          }
        }
      }
    }

    for (const liftable of liftables) {
      input[liftable.y] =
        input[liftable.y].substring(0, liftable.x) +
        "." +
        input[liftable.y].substring(liftable.x + 1);
    }
  }

  return liftables.length;
};

function evaluateCoordinate(x, y) {
  const map = {
    nw: { x: -1, y: -1 },
    n: { x: 0, y: -1 },
    ne: { x: 1, y: -1 },
    w: { x: -1, y: 0 },
    e: { x: 1, y: 0 },
    sw: { x: -1, y: 1 },
    s: { x: 0, y: 1 },
    se: { x: 1, y: 1 },
  };
  const values = Object.values(map).map((coordDiff) => {
    const diffX = x + coordDiff.x;
    const diffY = y + coordDiff.y;
    if (
      diffX < 0 ||
      diffY < 0 ||
      diffY >= input.length ||
      diffX >= input[diffY].length
    ) {
      return null;
    }
    return input[diffY][diffX];
  });
  const lessThanFour = values.filter((v) => v === "@").length < 4;
  return lessThanFour;
}
