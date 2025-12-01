const input = process.argv[4] == "t" ? require("./input-test") : require("./input");

const min = 0;
const max = 99;

let clicks = 0;

function resolveNumber(val, x) {
  const num = x ? val + x : val;

  if (num > max) {
    if (num != 100) {
      clicks++;
    }
    return resolveNumber(min + (num - max - 1));
  }
  if (num < min) {
    if (val != 0) {
      clicks++;
    }

    return resolveNumber(max - (min - num - 1));
  }
  
  if (num == 0) {
    clicks++;
  }

  return num;
}

module.exports = () => {
  const processedInput = input.map(x => (
    x[0] == "L" 
    ? parseInt(x.slice(1) * -1) 
    : parseInt(x.slice(1))
  ));
  
  let val = 50;

  for (const rotation of processedInput) {
    resolveNumber(val, rotation);
  }
  
  return clicks;
};

