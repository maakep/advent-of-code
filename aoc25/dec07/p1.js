const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

let splits = 0;

module.exports = () => {
  const startIndex = input[0].indexOf("S");

  let beams = [startIndex];
  for (const line of input.slice(1)) {
    const splitters = line.matchAll(/\^/g);

    beams = splitTheBeam(
      beams,
      [...splitters].map((s) => s.index)
    );
  }
  return splits;
};

function splitTheBeam(prevBeams, splitters) {
  const nextBeams = new Set();

  for (const beam of prevBeams) {
    let split = false;
    for (const splitter of splitters) {
      if (splitter == beam) {
        nextBeams.add(beam - 1);
        nextBeams.add(beam + 1);
        splits++;
        split = true;
      }
    }
    if (!split) {
      nextBeams.add(beam);
    }
  }

  return [...nextBeams];
}
