const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const { freshRanges } = input;
  const freshRangesWithoutOverlap = mergeRanges(freshRanges);

  return freshRangesWithoutOverlap.reduce(
    (acc, range) => acc + (range.to - range.from + 1),
    0
  );
};

function mergeRanges(ranges) {
  const sorted = [...ranges].sort((a, b) => a.from - b.from);
  const merged = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const last = merged[merged.length - 1];

    if (current.from <= last.to) {
      last.to = Math.max(last.to, current.to);
    } else {
      merged.push(current);
    }
  }

  return merged;
}
