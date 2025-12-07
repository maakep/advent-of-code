const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const operations = input[input.length - 1];
  const lines = input.slice(0, -1);
  const results = [];

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    const numbers = lines.map((x) => x[i]);

    let result = operation === "+" ? 0 : 1;

    for (let x = 0; x < 3; x++) {
      let newNumber = "";
      for (const number of numbers) {
        if (number.length <= x) continue;
        newNumber += number[x];
      }
      console.log(newNumber, operation);
      result = operate(result, parseInt(newNumber), operation);
    }

    console.log("---");
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
