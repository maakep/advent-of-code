const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const [operations, ...lines] = input.reverse();
  const results = [];

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    const numbers = lines.map((x) => parseInt(x[i]));

    let result = operation === "+" ? 0 : 1;

    for (const number of numbers) {
      result = operate(result, number, operation);
      prev = number;
    }

    results.push(result);
  }

  return results.reduce((acc, curr) => acc + curr, 0);
};

function operate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "*":
      return a * b;
  }
}
