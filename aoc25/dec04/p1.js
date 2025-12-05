const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const liftables = [];
  for (const line in input) {
    for (const charIndex in input[line]) {
      if (input[line][charIndex] === "@") {
        const [x, y] = [Number.parseInt(charIndex), Number.parseInt(line)];
        const canLift = evaluateCoordinate(x, y);
        if (canLift) liftables.push({ x, y });
      }
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
