const input = process.argv[4] == "t" ? require("./input-test") : require("./input");

const min = 0;
const max = 99;


function resolveNumber(num) {
  if (num > max) {
    return resolveNumber(min + (num - max - 1));
  }
  if (num < min) {
    return resolveNumber(max - (min - num - 1));
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

  const result = processedInput.map((x, i) => {
    const num = resolveNumber(val + x);
    val = num;
    return num
  })
  
  return result.filter(x => x == 0).length;
};

