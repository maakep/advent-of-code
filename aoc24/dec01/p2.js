const input = process.argv[4] == 't' ? require('./input-test') : require('./input');

module.exports = () => {
  const list1 = input[0];
  const list2 = input[1];

  const res = list1.reduce((acc, curr, i) => {
    const similars = list2.filter((x) => x == curr).length;
    const val = similars * curr;
    return val + acc;
  }, 0);

  return res;
};
