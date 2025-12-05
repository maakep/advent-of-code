const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const { ingredients } = input;
  const freshIngredients = [];

  for (const ingredient of ingredients) {
    const result = verifyIngredientIntegrity(ingredient);

    if (result) {
      freshIngredients.push(result);
      continue;
    }
  }

  return freshIngredients.length;
};

function verifyIngredientIntegrity(ingredient) {
  const { freshRanges } = input;

  for (const range of freshRanges) {
    if (ingredient >= range.from && ingredient <= range.to) {
      return ingredient;
    }
  }

  return null;
}
